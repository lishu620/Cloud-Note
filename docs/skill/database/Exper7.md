---
id: Experiment-7-Stored Procedure Design
slug: Stored Procedure Design
title: 实验七：存储过程设计
date: 2025-6-5
authors: m1ishu
tags: [database]
keywords: [数据库]
---
7.1 实验目的

1. 掌握创建无参数、带输入参数、带默认参数值、带输出参数存储过程的方法
2. 掌握存储过程与游标综合运用的方法

## 7.2 实验环境

* SQL Server 2012
* DataGrip 或其他SQL客户端工具

## 7.3 实验内容实现

### 1. 查询指定学生选课信息的存储过程

CREATE PROCEDURE sp_GetStudentCourses

### 2. 查询课程及格学生信息并返回及格人数的存储过程

```
CREATE PROCEDURE sp_GetPassedStudents
    @courseNo CHAR(4),
    @passScore DECIMAL(5,1) = 60,
    @passCount INT OUTPUT
AS
BEGIN
    -- 查询及格学生信息
    SELECT 
        S.Sno AS 学号,
        S.Sname AS 姓名,
        SC.Grade AS 成绩
    FROM 
        Student S
        JOIN SC ON S.Sno = SC.Sno
    WHERE 
        SC.Cno = @courseNo 
        AND SC.Grade >= @passScore
    ORDER BY 
        SC.Grade DESC;
  
    -- 计算及格人数
    SELECT @passCount = COUNT(*)
    FROM SC
    WHERE Cno = @courseNo AND Grade >= @passScore;
END
GO

-- 测试
DECLARE @count INT;
EXEC sp_GetPassedStudents 'C001', 70, @count OUTPUT;
SELECT '及格人数' AS 结果, @count AS 人数;

DECLARE @count2 INT;
EXEC sp_GetPassedStudents 'C002', DEFAULT, @count2 OUTPUT;
SELECT '及格人数' AS 结果, @count2 AS 人数;
```

### 3. 统计不同专业指定学年学期课程平均分的存储过程

```
CREATE PROCEDURE sp_GetMajorAvgScoreByTerm
    @term VARCHAR(11)  -- 格式: YYYY-YYYY/N
AS
BEGIN
    DECLARE @year1 INT = CAST(SUBSTRING(@term, 1, 4) AS INT);
    DECLARE @year2 INT = CAST(SUBSTRING(@term, 6, 4) AS INT);
    DECLARE @semester INT = CAST(SUBSTRING(@term, 11, 1) AS INT);
  
    -- 计算各专业各课程平均分
    SELECT 
        S.Smajor AS 专业,
        C.Cname AS 课程名称,
        AVG(SC.Grade) AS 平均分
    FROM 
        Student S
        JOIN SC ON S.Sno = SC.Sno
        JOIN Course C ON SC.Cno = C.Cno
    WHERE 
        -- 计算学生年级对应的学期
        (LEFT(S.Sno, 4) = CAST(@year1-1 AS CHAR(4)) AND C.Cterm = @semester + 2) OR  -- 2011级查第3学期
        (LEFT(S.Sno, 4) = CAST(@year1-2 AS CHAR(4)) AND C.Cterm = @semester + 4) OR  -- 2010级查第5学期
        (LEFT(S.Sno, 4) = CAST(@year1 AS CHAR(4)) AND C.Cterm = @semester)       -- 2012级查第1学期
    GROUP BY 
        S.Smajor, C.Cname
    ORDER BY 
        S.Smajor, AVG(SC.Grade) DESC;
END
GO

-- 测试
EXEC sp_GetMajorAvgScoreByTerm '2012-2013/1';
```

### 4. 统计教师人数分布的存储过程

```
CREATE PROCEDURE sp_GetTeacherStatistics
    @deptName VARCHAR(50)
AS
BEGIN
    -- 按年龄段统计
    SELECT 
        CASE 
            WHEN DATEDIFF(YEAR, T.Thirthday, GETDATE()) < 30 THEN '30岁以下'
            WHEN DATEDIFF(YEAR, T.Thirthday, GETDATE()) BETWEEN 30 AND 39 THEN '30-39岁'
            WHEN DATEDIFF(YEAR, T.Thirthday, GETDATE()) BETWEEN 40 AND 49 THEN '40-49岁'
            ELSE '50岁及以上'
        END AS 年龄段,
        COUNT(*) AS 人数
    FROM 
        Teacher T
    WHERE 
        T.Tdept = @deptName
    GROUP BY 
        CASE 
            WHEN DATEDIFF(YEAR, T.Thirthday, GETDATE()) < 30 THEN '30岁以下'
            WHEN DATEDIFF(YEAR, T.Thirthday, GETDATE()) BETWEEN 30 AND 39 THEN '30-39岁'
            WHEN DATEDIFF(YEAR, T.Thirthday, GETDATE()) BETWEEN 40 AND 49 THEN '40-49岁'
            ELSE '50岁及以上'
        END
    ORDER BY 
        年龄段;
  
    -- 按职称统计
    SELECT 
        T.Tposition AS 职称,
        COUNT(*) AS 人数
    FROM 
        Teacher T
    WHERE 
        T.Tdept = @deptName
    GROUP BY 
        T.Tposition
    ORDER BY 
        人数 DESC;
END
GO

-- 测试
EXEC sp_GetTeacherStatistics '计算机学院';
```

## 7.4 拓展训练实现

### 1. 汇总学年学期成绩和学分的存储过程

```
CREATE PROCEDURE sp_GetTermSummary
    @term VARCHAR(11)  -- 格式: YYYY-YYYY/N
AS
BEGIN
    DECLARE @year1 INT = CAST(SUBSTRING(@term, 1, 4) AS INT);
    DECLARE @year2 INT = CAST(SUBSTRING(@term, 6, 4) AS INT);
    DECLARE @semester INT = CAST(SUBSTRING(@term, 11, 1) AS INT);
  
    -- 各专业课程平均成绩
    SELECT 
        S.Smajor AS 专业,
        C.Cname AS 课程,
        AVG(SC.Grade) AS 平均成绩,
        COUNT(*) AS 修读人数
    FROM 
        Student S
        JOIN SC ON S.Sno = SC.Sno
        JOIN Course C ON SC.Cno = C.Cno
    WHERE 
        (LEFT(S.Sno, 4) = CAST(@year1-1 AS CHAR(4)) AND C.Cterm = @semester + 2) OR
        (LEFT(S.Sno, 4) = CAST(@year1-2 AS CHAR(4)) AND C.Cterm = @semester + 4) OR
        (LEFT(S.Sno, 4) = CAST(@year1 AS CHAR(4)) AND C.Cterm = @semester)
    GROUP BY 
        S.Smajor, C.Cname
    ORDER BY 
        S.Smajor, AVG(SC.Grade) DESC;
  
    -- 学生平均成绩和获得学分
    SELECT 
        S.Sno AS 学号,
        S.Sname AS 姓名,
        AVG(SC.Grade) AS 平均成绩,
        SUM(CASE WHEN SC.Grade >= 60 THEN C.Ccredit ELSE 0 END) AS 获得学分
    FROM 
        Student S
        JOIN SC ON S.Sno = SC.Sno
        JOIN Course C ON SC.Cno = C.Cno
    WHERE 
        (LEFT(S.Sno, 4) = CAST(@year1-1 AS CHAR(4)) AND C.Cterm = @semester + 2) OR
        (LEFT(S.Sno, 4) = CAST(@year1-2 AS CHAR(4)) AND C.Cterm = @semester + 4) OR
        (LEFT(S.Sno, 4) = CAST(@year1 AS CHAR(4)) AND C.Cterm = @semester)
    GROUP BY 
        S.Sno, S.Sname
    ORDER BY 
        平均成绩 DESC;
END
GO

-- 测试
EXEC sp_GetTermSummary '2012-2013/1';
```

### 2. 分页显示存储过程(已提供代码)

```
-- 使用实验手册中提供的PageQuery存储过程代码
-- 测试
EXECUTE PageQuery N'Student', N'Sno', 3, 2;
```

## 7.5 实验总结

通过本次实验，我掌握了以下内容：

1. **存储过程的基本创建方法** ：学会了如何创建无参数、带输入参数、带默认参数和带输出参数的存储过程。
2. **复杂业务逻辑实现** ：通过统计不同专业指定学年学期的课程平均分等任务，掌握了如何在存储过程中处理复杂的业务逻辑和条件判断。
3. **游标的使用** ：虽然没有在本实验中直接使用游标，但在统计教师人数分布等任务中，理解了类似游标的分组统计思想。
4. **参数传递与返回值** ：学会了如何通过输出参数从存储过程中返回多个值，如及格人数统计。
5. **分页查询实现** ：通过拓展训练中的分页存储过程，掌握了通用的分页查询技术。
6. **错误处理** ：在实际编写过程中，学会了如何处理可能出现的边界条件和异常情况。
