---
id: E3-Data-Query
slug: Experiment-3-Data-Query
title: 实验三：数据查询
date: 2025-5-6
authors: m1ishu
tags: [database]
keywords: [数据库]
---
## 实验目的

1. 熟练掌握SELECT实现单表查询（含集合运算）；
2. 熟练掌握SELECT实现多表查询（含自身连接、外连接、嵌套查询）。

## 实验环境

数据库:`SQL Server 2022`

管理软件:`DataGrip 2024.1`

## 数据补充

由于原本的数据无法支撑全部查询列，因此选择补充部分数据

```
-- Student表
INSERT INTO Student (Sno, Sname, Sex, Sbirthday, Shometown, Sgrade, Smajor, Sdept) VALUES
('20201101001', '张明', '男', '2001-05-12', '北京', 2020, '计算机科学', 'CS'),
('20201101002', '李红', '女', '2001-08-23', '上海', 2020, '计算机科学', 'CS'),
('20201202001', '王强', '男', '2000-11-15', '广州', 2020, '软件工程', 'SE'),
('20201202002', '赵雪', '女', '2000-03-28', '深圳', 2020, '软件工程', 'SE'),
('20201303001', '刘芳', '女', '2001-02-14', '杭州', 2020, '汉语言文学', 'CH'),
('20201303002', '陈刚', '男', '2001-07-19', '南京', 2020, '汉语言文学', 'CH'),
('20211401001', '周涛', '男', '2002-04-05', '成都', 2021, '计算机科学', 'CS'),
('20211401002', '吴丽', '女', '2002-09-30', '重庆', 2021, '计算机科学', 'CS');

-- SC表
INSERT INTO Course (Cno, Cname, Cpno, Ctype, Chour, Ccredit, Csem, Cabstract) VALUES
('C006', '数据库原理', 'C001', '专业核心', 64, 4, 4, '数据库系统基本原理'),
('C007', '操作系统', 'C001', '专业核心', 64, 4, 4, '操作系统原理与设计'),
('C008', '算法分析', 'C003', '专业核心', 48, 3, 5, '算法设计与分析'),
('C009', '人工智能', 'C001', '专业选修', 32, 2, 6, '人工智能基础'),
('C010', '机器学习', 'C008', '专业选修', 48, 3, 7, '机器学习基础');

-- Teacher表
INSERT INTO Teacher (TID, Tname, Tsex, Tposition, Tbirthday, Thiredate, Tdept) VALUES
('20181201', '张教授', '男', '教授', '1975-06-15', '2000-08-01', 'CS'),
('20181202', '李副教授', '女', '副教授', '1980-09-20', '2005-07-15', 'SE'),
('20191203', '王讲师', '男', '讲师', '1985-03-25', '2010-09-01', 'CH'),
('20201204', '赵教授', '女', '教授', '1978-12-10', '2003-08-20', 'CS');

-- SC表
INSERT INTO SC (Sno, Cno, Grade) VALUES
('20201101001', 'C001', 92),
('20201101001', 'C002', 88),
('20201101001', 'C003', 95),
('20201101002', 'C001', 85),
('20201101002', 'C002', 90),
('20201202001', 'C001', 78),
('20201202001', 'C002', 82),
('20201202001', 'C003', 91),
('20201202002', 'C001', 95),
('20201202002', 'C002', 93),
('20201202002', 'C003', 89),
('20201303001', 'C001', 88),
('20201303002', 'C001', 76),
('20211401001', 'C001', 91),
('20211401001', 'C002', 87),
('20211401002', 'C001', 94),
('20211401002', 'C002', 85);

-- TC表
INSERT INTO TC (TID, Cno, Classroom) VALUES
('20181201', 'C006', 'JA2101'),
('20181201', 'C007', 'JA2102'),
('20181202', 'C008', 'JA2103'),
('20181202', 'C009', 'JA2104'),
('20191203', 'C010', 'JB3101'),
('20201204', 'C006', 'JB3102'),
('20051303', 'C006', 'JB3103');
```

## 实验内容

1.查询软件工程学院（'SE'）学生的学号和姓名。

```
SELECT Sno, Sname 
FROM Student 
WHERE Sdept = 'SE';
```

2.查询求选修C002课程的学生学号和成绩，结果按成绩降序排列；如成绩相同，则按学号升序排列。

```
SELECT Sno, Grade 
FROM SC 
WHERE Cno = 'C002' 
ORDER BY Grade DESC, Sno ASC;
```

3.查询选修C002课程成绩在80-90之间的学生学号和成绩，并将成绩乘以0.9输出。

```
SELECT Sno, Grade * 0.9 AS AdjustedGrade 
FROM SC 
WHERE Cno = 'C002' AND Grade BETWEEN 80 AND 90;
```

4.查询软件工程学院（'SE'）或文学院（'CH'）姓“张”的学生信息。

```
SELECT * 
FROM Student 
WHERE (Sdept = 'SE' OR Sdept = 'CH') AND Sname LIKE '张%';
```

5.查询“秦海东”教师担任的课程总学时数。

```
SELECT SUM(Chour) AS TotalHours
FROM Course c
JOIN TC t ON c.Cno = t.Cno
JOIN Teacher te ON t.TID = te.TID
WHERE te.Tname = '秦海东';
```

6.查询“陈流星”同学所选修课程的任课教师信息。

```
SELECT DISTINCT te.*
FROM Teacher te
JOIN TC t ON te.TID = t.TID
JOIN SC s ON t.Cno = s.Cno
JOIN Student st ON s.Sno = st.Sno
WHERE st.Sname = '陈流星';
```

7.查询总成绩在200分以上的学生学号、总成绩和平均成绩。

```
SELECT Sno, SUM(Grade) AS TotalGrade, AVG(Grade) AS AvgGrade
FROM SC
WHERE Grade IS NOT NULL
GROUP BY Sno
HAVING SUM(Grade) > 200;
```

8.在 FROM 子句中用INNER JOIN 连接符指定连接条件查询所有选修C002号课程并取得课程成绩的学生学号、姓名和成绩。

```
SELECT s.Sno, s.Sname, sc.Grade
FROM Student s
INNER JOIN SC sc ON s.Sno = sc.Sno
WHERE sc.Cno = 'C002' AND sc.Grade IS NOT NULL;
```

9.查询选修课程一样且成绩相同的学生基本情况（使用自连接查询）。

```
SELECT DISTINCT s1.*
FROM SC sc1
JOIN SC sc2 ON sc1.Cno = sc2.Cno AND sc1.Grade = sc2.Grade AND sc1.Sno < sc2.Sno
JOIN Student s1 ON sc1.Sno = s1.Sno
JOIN Student s2 ON sc2.Sno = s2.Sno;
```

10.查询所有考试成绩及格的学生成绩信息，结果中包含学生学号、姓名、性别、选修课程编号、成绩，并按照成绩进行降序排列（使用内连接INNER）。

```
SELECT s.Sno, s.Sname, s.Ssex, sc.Cno, sc.Grade
FROM Student s
INNER JOIN SC sc ON s.Sno = sc.Sno
WHERE sc.Grade >= 60
ORDER BY sc.Grade DESC;
```

11.查询所有学生的总成绩（包括没有成绩的学生）、学号和姓名（外部连接查询）。

```
SELECT s.Sno, s.Sname, SUM(ISNULL(sc.Grade, 0)) AS TotalGrade
FROM Student s
LEFT JOIN SC sc ON s.Sno = sc.Sno
GROUP BY s.Sno, s.Sname;
```

12.查询某课程成绩在90分以上的学生学号和姓名（使用谓词IN连接子查询）。

```
SELECT Sno, Sname
FROM Student
WHERE Sno IN (SELECT Sno FROM SC WHERE Grade > 90);
```

13.查询有课程成绩的学生学号和姓名(使用谓词EXISTS连接子查询)。

```
SELECT Sno, Sname
FROM Student s
WHERE EXISTS (SELECT 1 FROM SC WHERE Sno = s.Sno AND Grade IS NOT NULL);
```

14.从 Course 表中查询课程名中包含“数据”的课程信息。

```
SELECT *
FROM Course
WHERE Cname LIKE '%数据%';
```

15.查询所有学生及其选修课情况（包括未选修任何课程的学生），显示学生姓名、课程名称和课程成绩（要求使用外连接）。

```
SELECT s.Sname, c.Cname, sc.Grade
FROM Student s
LEFT JOIN SC sc ON s.Sno = sc.Sno
LEFT JOIN Course c ON sc.Cno = c.Cno;
```

16.查询所有学生中平均成绩最高的学生学号。

```
SELECT TOP 1 Sno, AVG(Grade) AS AvgGrade
FROM SC
WHERE Grade IS NOT NULL
GROUP BY Sno
ORDER BY AvgGrade DESC;
```

17.查询所有软件工程学院的学生学号、选修课程号以及分数（使用EXISTS谓词）。

```
SELECT sc.Sno, sc.Cno, sc.Grade
FROM SC sc
WHERE EXISTS (
    SELECT 1 FROM Student s 
    WHERE s.Sno = sc.Sno AND s.Sdept = 'SE'
);
```

18.查询选修了学号20131322001同学所选修全部课程的学生姓名、学号、课程名。

```
SELECT s.Sname, s.Sno, c.Cname
FROM Student s
JOIN SC sc ON s.Sno = sc.Sno
JOIN Course c ON sc.Cno = c.Cno
WHERE NOT EXISTS (
    SELECT Cno FROM SC WHERE Sno = '20131322001'
    EXCEPT
    SELECT Cno FROM SC WHERE Sno = s.Sno
) AND s.Sno <> '20131322001';
```

19.求选修了C001号课程的学生中，成绩高于“陈流星”选修C001课程的所有学生学号、姓名和成绩；

```
SELECT s.Sno, s.Sname, sc.Grade
FROM Student s
JOIN SC sc ON s.Sno = sc.Sno
WHERE sc.Cno = 'C001' 
AND sc.Grade > (
    SELECT Grade 
    FROM SC 
    JOIN Student ON SC.Sno = Student.Sno
    WHERE SC.Cno = 'C001' AND Student.Sname = '陈流星'
);
```

20.查询“计算机导论”课程成绩比“数据结构”课程成绩高的学生姓名、课程名、计算机导论课程成绩以及数据结构课程成绩。

```
SELECT s.Sname, 
       '计算机导论' AS Course1, sc1.Grade AS Grade1,
       '数据结构' AS Course2, sc2.Grade AS Grade2
FROM Student s
JOIN SC sc1 ON s.Sno = sc1.Sno
JOIN Course c1 ON sc1.Cno = c1.Cno AND c1.Cname = '计算机导论'
JOIN SC sc2 ON s.Sno = sc2.Sno
JOIN Course c2 ON sc2.Cno = c2.Cno AND c2.Cname = '数据结构'
WHERE sc1.Grade > sc2.Grade;
```

## 实验总结

通过本次实验，我掌握了各种SQL查询技术，包括：

1. 单表查询与多表连接查询
2. 内连接、外连接和自连接的应用
3. 子查询的多种使用方式（IN、EXISTS等）
4. 聚合函数与分组查询
5. 复杂条件查询和排序
6. 集合运算的应用

在实验过程中，我特别注意到：

* 连接查询时表间关系的正确建立
* 子查询的效率问题
* NULL值的特殊处理
* 查询结果排序的重要性
