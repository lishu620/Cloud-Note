---
id: E2-Data-Update
slug: Experiment-2-Data-Update
title: 实验二：数据更新
date: 2025-4-24
authors: m1ishu
tags: [database]
keywords: [数据库]
---
## 一、实验目的

1. 熟练运用INSERT语句向数据表中插入数据
2. 熟练运用UPDATE语句修改数据表中数据
3. 熟练运用DELETE语句删除数据表中数据
4. 掌握表复制的方法

## 二、实验环境

SQL Server 12

## 三、实验内容

### 1. 插入数据

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

### 2. 数据更新

```
-- 1) 将"数据结构"的学分修改为5学分
UPDATE Course SET Ccredit = 5 WHERE Cname = '数据结构';

-- 2) 将SC表中每个学生的每门课程成绩调整为原成绩的85%
UPDATE SC SET Grade = Grade * 0.85 WHERE Grade IS NOT NULL;

-- 3) 将所有女生选修的课程成绩加1分
UPDATE SC 
SET Grade = Grade + 1 
WHERE Grade IS NOT NULL 
AND Sno IN (SELECT Sno FROM Student WHERE Ssex = '女');

-- 4) 将选修了"程序设计基础"课程的学生课程成绩均提高5%
UPDATE SC
SET Grade = Grade * 1.05
WHERE Grade IS NOT NULL
AND Cno = (SELECT Cno FROM Course WHERE Cname = '程序设计基础');
```

### 3. 数据删除

```
-- 1) 删除工号为20061307的教师信息
DELETE FROM TC WHERE TID = '20061307';
DELETE FROM Teacher WHERE TID = '20061307';

-- 2) 删除"李玲"同学的所有选课信息
DELETE FROM SC 
WHERE Sno = (SELECT Sno FROM Student WHERE Sname = '李玲');

-- 3) 删除所有表中的数据
-- 注意删除顺序，先删除有外键约束的表
DELETE FROM SC;
DELETE FROM TC;
DELETE FROM Student;
DELETE FROM Teacher;
DELETE FROM Course;
```

### 4. 还原数据

执行Educlnsert.SQL脚本文件还原数据

## 四、思考题解答

1. **删除表和删除表中的数据使用的SQL语句有什么不同？其作用又有什么不同？**
   * 删除表使用 `DROP TABLE 表名`，作用是删除整个表结构及其数据，表将不复存在
   * 删除表中数据使用 `DELETE FROM 表名`或 `TRUNCATE TABLE 表名`，作用是删除表中的所有数据但保留表结构
   * `DELETE`可以带WHERE条件删除部分数据，且可以回滚；`TRUNCATE`删除所有数据且不可回滚，但效率更高
2. **在Course表中现有数据基础上，如果运用UPDATE操作将Course表中课程号'C005'的前序课程号Cpno修改为'P001'，将会发生什么情况？**
   * 将会违反外键约束，因为'P001'在Course表中不存在
   * Cpno作为外键必须引用Course表中已存在的Cno值，否则会报错
3. **学生"张露"选择了课程'C001'、'C002'、'C003'和'C004'，在学生表Student中执行更改"李玲"同学的学号，将会发生什么情况？**
   * 如果"李玲"的学号被其他表(如SC表)引用，直接更改学号会违反外键约束
   * 必须先更新SC表中相关记录，或者设置级联更新，才能更改Student表中的学号
4. **学生"陈流星"选择了课程'C001'和'C002'，在课程表Course中执行删除'C001'和'C002'课程元组数据时，将会发生什么情况？**
   * 会违反外键约束，因为SC表中存在对这两门课程的引用记录
   * 必须先删除SC表中相关的选课记录，或者设置级联删除，才能删除Course表中的课程

## 五、实验总结

通过本次实验，我掌握了SQL数据更新操作的基本方法，包括INSERT、UPDATE和DELETE语句的使用。在插入数据时，需要注意外键约束问题，必须按照依赖关系顺序插入数据。更新数据时需要考虑NULL值的处理。删除数据时更要注意表间的引用关系，避免违反外键约束。同时，通过思考题的分析，加深了对数据库完整性和约束的理解

PNG 28.58KB

我需要插入这些数据

   SELECT * FROM SC;
   SELECT * FROM TC;
