---
id: E4-User
slug: Experiment-4-User
title: 实验四：权限管理
date: 2025-5-14
authors: m1ishu
tags: [database]
keywords: [数据库]
---
## 实验准备

首先确保您已安装SQL Server并拥有sa账户权限，同时已创建教务数据库Educ及相关表(Student, SC, Course, Teacher, TC)。

## 实验步骤

### 1. 创建登录账户和数据库用户

```
-- 使用sa账户登录后执行以下操作

-- 创建登录账户
CREATE LOGIN login1 WITH PASSWORD = 'stu1';
CREATE LOGIN login2 WITH PASSWORD = 'stu2';
CREATE LOGIN login3 WITH PASSWORD = 'stu3';

-- 在Educ数据库中创建用户
USE Educ;
CREATE USER stu1 FOR LOGIN login1;
CREATE USER stu2 FOR LOGIN login2;
CREATE USER stu3 FOR LOGIN login3;
```

### 2. 为用户授权

#### 为stu1用户授权

```
-- 授予stu1对SC表的SELECT和INSERT权限
GRANT SELECT, INSERT ON SC TO stu1;

-- 授予stu1对Student表的UPDATE和DELETE权限
GRANT UPDATE, DELETE ON Student TO stu1;

-- 授予stu1对Course表的SELECT、UPDATE、INSERT和DELETE权限
GRANT SELECT, UPDATE, INSERT, DELETE ON Course TO stu1;
```

#### 为stu2用户授权

```
-- 授予stu2对SC表的SELECT权限
GRANT SELECT ON SC TO stu2;

-- 授予stu2对Student表的INSERT权限
GRANT INSERT ON Student TO stu2;

-- 授予stu2对Course表的UPDATE权限
GRANT UPDATE ON Course TO stu2;

-- 授予stu2对Teacher表的Tdept列UPDATE权限
GRANT UPDATE (Tdept) ON Teacher TO stu2;

-- 授予stu2对TC表的DELETE权限
GRANT DELETE ON TC TO stu2;
```

### 3. 授权测试

#### 以stu1用户登录测试

```
-- 测试查询权限
SELECT * FROM SC;
SELECT * FROM Student;
SELECT * FROM Course;

-- 测试插入权限
INSERT INTO SC VALUES ('S001', 'C001', 90);
INSERT INTO Student VALUES ('S001', '张三', '男', 20, 'CS');
INSERT INTO Course VALUES ('C001', '数据库', 4, 'CS');

-- 测试更新权限
UPDATE SC SET Grade = 85 WHERE Sno = 'S001' AND Cno = 'C001';
UPDATE Student SET Sname = '李四' WHERE Sno = 'S001';
UPDATE Course SET Credit = 3 WHERE Cno = 'C001';

-- 测试删除权限
DELETE FROM SC WHERE Sno = 'S001' AND Cno = 'C001';
DELETE FROM Student WHERE Sno = 'S001';
DELETE FROM Course WHERE Cno = 'C001';
```

#### 以stu2用户登录测试

```
-- 测试查询权限
SELECT * FROM SC;
SELECT * FROM Student;
SELECT * FROM Course;
SELECT * FROM Teacher;
SELECT * FROM TC;

-- 测试插入权限 (只有Student表有INSERT权限)
INSERT INTO Student VALUES ('S002', '王五', '女', 19, 'CH');

-- 测试更新权限
UPDATE Course SET Cname = '高级数据库' WHERE Cno = 'C001';
UPDATE Teacher SET Tdept = 'CH' WHERE Tdept = 'SE';

-- 测试删除权限 (只有TC表有DELETE权限)
DELETE FROM TC WHERE Tno = 'T001' AND Cno = 'C001';
```

### 4. 收回权限

```
-- 使用sa账户登录收回权限
USE Educ;

-- 收回stu1对SC表的SELECT权限
REVOKE SELECT ON SC FROM stu1;

-- 收回stu1对Student表的UPDATE和INSERT权限
REVOKE UPDATE, INSERT ON Student FROM stu1;

-- 收回stu1对Course表的DELETE权限
REVOKE DELETE ON Course FROM stu1;
```

### 5. 测试收回权限后的效果

以stu1用户登录测试：

```
-- 测试查询SC表 (应该失败，SELECT权限已被收回)
SELECT * FROM SC;

-- 测试插入Student表 (应该失败，INSERT权限已被收回)
INSERT INTO Student VALUES ('S003', '赵六', '男', 21, 'EE');

-- 测试更新Student表 (应该失败，UPDATE权限已被收回)
UPDATE Student SET Sname = '钱七' WHERE Sno = 'S002';

-- 测试删除Course表 (应该失败，DELETE权限已被收回)
DELETE FROM Course WHERE Cno = 'C001';
```

### 6. 删除用户和登录账户

```
-- 使用sa账户登录删除用户和登录
USE Educ;

-- 删除数据库用户
DROP USER stu1;
DROP USER stu2;
DROP USER stu3;

-- 删除登录账户
DROP LOGIN login1;
DROP LOGIN login2;
DROP LOGIN login3;
```

## 注意事项

1. 在执行GRANT和REVOKE语句时，确保当前数据库上下文是正确的(USE Educ)
2. 测试时注意使用合法的测试数据，避免违反任何约束条件
3. 每次权限变更后，可能需要重新连接才能使新权限生效
4. 在DataGrip中测试时，可以创建多个连接分别以不同用户身份登录
