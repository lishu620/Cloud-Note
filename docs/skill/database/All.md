---
id: database-all
slug: database-all-code
title: 所有实验代码
date: 2025-5-8
authors: m1ishu
tags: [database]
keywords: [数据库]
---
## 数据集

### 创建数据库

```
-- 检查数据库是否已存在，若存在则删除
IF EXISTS (SELECT name FROM sys.databases WHERE name = 'Educ')
BEGIN
    ALTER DATABASE Educ SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE Educ;
END
GO

-- 创建Educ数据库，初始大小为5MB，存储在d:\db路径下
CREATE DATABASE Educ
ON PRIMARY 
(
    NAME = 'Educ_Data',
    FILENAME = 'd:\db\Educ.mdf',
    SIZE = 5MB,
    MAXSIZE = UNLIMITED,
    FILEGROWTH = 1MB
)
LOG ON
(
    NAME = 'Educ_Log',
    FILENAME = 'd:\db\Educ.ldf',
    SIZE = 2MB,
    MAXSIZE = 50MB,
    FILEGROWTH = 10%
);
GO

-- 使用Educ数据库
USE Educ;
GO
```

### 创建数据表

```
-- 创建Student表
IF OBJECT_ID('Student', 'U') IS NOT NULL
    DROP TABLE Student;
GO

CREATE TABLE Student (
    Sno CHAR(12) NOT NULL,
    Sname CHAR(10) NOT NULL,
    Sex CHAR(2) NOT NULL,
    Sbirthday DATE NULL,
    Shometown CHAR(10) NULL,
    Sgrade SMALLINT NULL,
    Smajor CHAR(10) NULL,
    Sdept CHAR(2) NULL,
    CONSTRAINT PK_Student PRIMARY KEY (Sno)
);
GO

-- 创建Course表
IF OBJECT_ID('Course', 'U') IS NOT NULL
    DROP TABLE Course;
GO

CREATE TABLE Course (
    Cno CHAR(4) NOT NULL,
    Cname CHAR(20) NOT NULL,
    Cpno CHAR(4) NULL,
    Ctype CHAR(8) NULL,
    Chour SMALLINT NULL,
    Ccredit DECIMAL(3,1) NULL,
    Csem SMALLINT NULL,
    Cabstract VARCHAR(200) NULL,
    CONSTRAINT PK_Course PRIMARY KEY (Cno),
    CONSTRAINT FK_Course_Cpno FOREIGN KEY (Cpno) REFERENCES Course(Cno)
);
GO

-- 创建Teacher表
IF OBJECT_ID('Teacher', 'U') IS NOT NULL
    DROP TABLE Teacher;
GO

CREATE TABLE Teacher (
    TID CHAR(8) NOT NULL,
    Tname CHAR(10) NOT NULL,
    Tsex CHAR(2) NULL,
    Tposition CHAR(10) NULL,
    Tbirthday DATE NULL,
    Thiredate DATE NULL,
    Tdept CHAR(2) NULL,
    CONSTRAINT PK_Teacher PRIMARY KEY (TID)
);
GO

-- 创建SC表
IF OBJECT_ID('SC', 'U') IS NOT NULL
    DROP TABLE SC;
GO

CREATE TABLE SC (
    Sno CHAR(12) NOT NULL,
    Cno CHAR(4) NOT NULL,
    Grade DECIMAL(5,1) NULL,
    CONSTRAINT PK_SC PRIMARY KEY (Sno, Cno),
    CONSTRAINT FK_SC_Student FOREIGN KEY (Sno) REFERENCES Student(Sno),
    CONSTRAINT FK_SC_Course FOREIGN KEY (Cno) REFERENCES Course(Cno)
);
GO

-- 创建TC表
IF OBJECT_ID('TC', 'U') IS NOT NULL
    DROP TABLE TC;
GO

CREATE TABLE TC (
    TID CHAR(8) NOT NULL,
    Cno CHAR(4) NOT NULL,
    Classroom CHAR(12) NULL,
    CONSTRAINT PK_TC PRIMARY KEY (TID, Cno),
    CONSTRAINT FK_TC_Teacher FOREIGN KEY (TID) REFERENCES Teacher(TID),
    CONSTRAINT FK_TC_Course FOREIGN KEY (Cno) REFERENCES Course(Cno)
);
GO
```

### 添加数据

#### 原始数据

```
-- 插入Student表数据
INSERT INTO Student VALUES
('20130102001', '李玲', '女', '1995-01-23', '重庆', 2013, '汉语言', 'CH'),
('20130102002', '王坤鹏', '男', '1994-10-27', '四川', 2013, '汉语言', 'CH'),
('20130102003', '刘慧春', '女', '1995-03-28', '湖南', 2013, '汉语言', 'CH'),
('20131322001', '李小飞', '男', '1995-07-19', '重庆', 2013, '软件工程', 'SE'),
('20131322002', '赵先平', '男', '1993-12-05', '重庆', 2013, '软件工程', 'SE'),
('20121323001', '张露', '女', '1994-05-24', '四川', 2012, '网络工程', 'SE'),
('20121323012', '陈流星', '男', '1994-09-20', '重庆', 2012, '网络工程', 'SE'),
('20121323087', '何燕', '女', '1993-10-03', '重庆', 2012, '网络工程', 'SE');

-- 插入Course表数据
-- 注意：需要先插入没有前置课程的课程，否则会违反外键约束
INSERT INTO Course VALUES
('C001', '计算机导论', NULL, '专业基础', 32, 2, 1, NULL),
('N001', '计算机网络', NULL, '专业基础', 48, 3, 4, NULL);

INSERT INTO Course VALUES
('C002', '程序设计基础', 'C001', '专业基础', 64, 4, 2, NULL),
('C003', '数据结构', 'C002', '专业基础', 64, 4, 3, NULL),
('C004', '面向对象技术', 'C001', '专业基础', 64, 4, 3, NULL),
('N002', '互联网技术', 'N001', '专业技术', 48, 3, 5, NULL),
('C005', 'JAVA', 'C004', '专业技术', 48, 3, 4, NULL),
('R001', '软件工程', 'C005', '专业基础', 48, 3, 6, NULL);

-- 插入Teacher表数据
INSERT INTO Teacher VALUES
('20051303', '王苹', '女', '副教授', '1973-09-21', '2005-07-01', 'SE'),
('20061307', '杨钢', '男', '讲师', '1979-03-04', '2006-07-16', 'SE'),
('19951313', '秦海东', '男', '副教授', '1970-12-08', '1995-07-25', 'SE');

-- 插入SC表数据
INSERT INTO SC (Sno, Cno, Grade) VALUES
('20121323001', 'C001', 93),
('20121323001', 'C002', 87),
('20121323001', 'C003', NULL),
('20121323001', 'C004', NULL),
('20121323012', 'C001', 88),
('20121323012', 'C002', 83),
('20131322001', 'C001', NULL),
('20131322002', 'C001', NULL);

-- 插入TC表数据
INSERT INTO TC (TID, Cno, Classroom) VALUES
('20051303', 'C001', 'JB1208'),
('20061307', 'N001', 'JD1401'),
('19951313', 'C003', 'JA1304'),
('20051303', 'C002', 'JA1106');
```

#### 补充集1

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

## 实验列表

### 实验2：数据更新

```
-- 1.将"数据结构"的学分修改为5学分
UPDATE Course SET Ccredit = 5 WHERE Cname = '数据结构';

-- 2.将SC表中每个学生的每门课程成绩调整为原成绩的85%
UPDATE SC SET Grade = Grade * 0.85 WHERE Grade IS NOT NULL;

-- 3.将所有女生选修的课程成绩加1分
UPDATE SC
SET Grade = Grade + 1
WHERE Grade IS NOT NULL
AND Sno IN (SELECT Sno FROM Student WHERE Sex = '女');

-- 4.将选修了"程序设计基础"课程的学生课程成绩均提高5%
UPDATE SC
SET Grade = Grade * 1.05
WHERE Grade IS NOT NULL
AND Cno = (SELECT Cno FROM Course WHERE Cname = '程序设计基础');

-- 5.删除工号为20061307的教师信息
DELETE FROM TC WHERE TID = '20061307';
DELETE FROM Teacher WHERE TID = '20061307';

-- 6.删除"李玲"同学的所有选课信息
DELETE FROM SC 
WHERE Sno = (SELECT Sno FROM Student WHERE Sname = '李玲');

-- 7.删除所有表中的数据
-- 注意删除顺序，先删除有外键约束的表
DELETE FROM SC;
DELETE FROM TC;
DELETE FROM Student;
DELETE FROM Teacher;
DELETE FROM Course;
```

### 实验3：数据查询

```
-- 1.查询软件工程学院（'SE'）学生的学号和姓名
SELECT Sno, Sname
FROM Student
WHERE Sdept = 'SE';

-- 2.查询求选修C002课程的学生学号和成绩，结果按成绩降序排列；如成绩相同，则按学号升序排列
SELECT Sno, Grade
FROM SC
WHERE Cno = 'C002'
ORDER BY Grade DESC, Sno ASC;

-- 3.查询选修C002课程成绩在80-90之间的学生学号和成绩，并将成绩乘以0.9输出
SELECT Sno, Grade * 0.9 AS AdjustedGrade
FROM SC
WHERE Cno = 'C002' AND Grade BETWEEN 80 AND 90;

-- 4.查询软件工程学院（'SE'）或数学院（'CS'）姓“张”的学生信息
SELECT *
FROM Student
WHERE (Sdept = 'SE' OR Sdept = 'CS') AND Sname LIKE '张%';

-- 5.查询“秦海东”教师担任的课程总学时数
SELECT SUM(Chour) AS TotalHours
FROM Course c
JOIN TC t ON c.Cno = t.Cno
JOIN Teacher te ON t.TID = te.TID
WHERE te.Tname = '秦海东';

-- 6.查询“陈流星”同学所选修课程的任课教师信息
SELECT DISTINCT te.*
FROM Teacher te
JOIN TC t ON te.TID = t.TID
JOIN SC s ON t.Cno = s.Cno
JOIN Student st ON s.Sno = st.Sno
WHERE st.Sname = '陈流星';

-- 7.查询总成绩在200分以上的学生学号、总成绩和平均成绩
SELECT Sno, SUM(Grade) AS TotalGrade, AVG(Grade) AS AvgGrade
FROM SC
WHERE Grade IS NOT NULL
GROUP BY Sno
HAVING SUM(Grade) > 200;

-- 8.在 FROM 子句中用INNER JOIN 连接符指定连接条件查询所有选修C002号课程并取得课程成绩的学生学号、姓名和成绩
SELECT s.Sno, s.Sname, sc.Grade
FROM Student s
INNER JOIN SC sc ON s.Sno = sc.Sno
WHERE sc.Cno = 'C002' AND sc.Grade IS NOT NULL;

-- 9.查询选修课程一样且成绩相同的学生基本情况（使用自连接查询）
SELECT DISTINCT s1.*
FROM SC sc1
JOIN SC sc2 ON sc1.Cno = sc2.Cno AND sc1.Grade = sc2.Grade AND sc1.Sno < sc2.Sno
JOIN Student s1 ON sc1.Sno = s1.Sno
JOIN Student s2 ON sc2.Sno = s2.Sno;

-- 10.查询所有考试成绩及格的学生成绩信息，结果中包含学生学号、姓名、性别、选修课程编号、成绩，并按照成绩进行降序排列（使用内连接INNER）
SELECT s.Sno, s.Sname, s.Sex, sc.Cno, sc.Grade
FROM Student s
INNER JOIN SC sc ON s.Sno = sc.Sno
WHERE sc.Grade >= 60
ORDER BY sc.Grade DESC;

-- 11.查询所有学生的总成绩（包括没有成绩的学生）、学号和姓名（外部连接查询）
SELECT s.Sno, s.Sname, SUM(ISNULL(sc.Grade, 0)) AS TotalGrade
FROM Student s
LEFT JOIN SC sc ON s.Sno = sc.Sno
GROUP BY s.Sno, s.Sname;

-- 12.查询某课程成绩在90分以上的学生学号和姓名（使用谓词IN连接子查询）
SELECT Sno, Sname
FROM Student
WHERE Sno IN (SELECT Sno FROM SC WHERE Grade > 90);

-- 13.查询有课程成绩的学生学号和姓名(使用谓词EXISTS连接子查询)
SELECT Sno, Sname
FROM Student s
WHERE EXISTS (SELECT 1 FROM SC WHERE Sno = s.Sno AND Grade IS NOT NULL);

-- 14.从 Course 表中查询课程名中包含“数据”的课程信息
SELECT *
FROM Course
WHERE Cname LIKE '%数据%';

-- 15.查询所有学生及其选修课情况（包括未选修任何课程的学生），显示学生姓名、课程名称和课程成绩（要求使用外连接）
SELECT s.Sname, c.Cname, sc.Grade
FROM Student s
LEFT JOIN SC sc ON s.Sno = sc.Sno
LEFT JOIN Course c ON sc.Cno = c.Cno;

-- 16.查询所有学生中平均成绩最高的学生学号
SELECT TOP 1 Sno, AVG(Grade) AS AvgGrade
FROM SC
WHERE Grade IS NOT NULL
GROUP BY Sno
ORDER BY AvgGrade DESC;

-- 17.查询所有软件工程学院的学生学号、选修课程号以及分数（使用EXISTS谓词）
SELECT sc.Sno, sc.Cno, sc.Grade
FROM SC sc
WHERE EXISTS (
    SELECT 1 FROM Student s
    WHERE s.Sno = sc.Sno AND s.Sdept = 'SE'
);

-- 18.查询选修了学号20131322001同学所选修全部课程的学生姓名、学号、课程名
SELECT s.Sname, s.Sno, c.Cname
FROM Student s
JOIN SC sc ON s.Sno = sc.Sno
JOIN Course c ON sc.Cno = c.Cno
WHERE NOT EXISTS (
    SELECT Cno FROM SC WHERE Sno = '20131322001'
    EXCEPT
    SELECT Cno FROM SC WHERE Sno = s.Sno
) AND s.Sno <> '20131322001';

-- 19.求选修了C001号课程的学生中，成绩高于“陈流星”选修C001课程的所有学生学号、姓名和成绩
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

-- 20.查询“计算机导论”课程成绩比“数据结构”课程成绩高的学生姓名、课程名、计算机导论课程成绩以及数据结构课程成绩
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
