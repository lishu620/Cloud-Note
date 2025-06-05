---
id: Experiment-5-data-integrity
slug: data-integrity
title: 实验五：数据完整性
date: 2025-5-21
authors: m1ishu
tags: [database]
keywords: [数据库]
---
## 实验目的

1. 掌握完整性约束机制
2. 掌握PRIMARY KEY实现实体完整性、FOREIGN KEY实现参照完整性的方法
3. 掌握CHECK实现用户定义完整性约束的方法
4. 掌握DEFAULT默认和RULE规则的定义及绑定方法

## 实验环境

* SQL Server 12
* 教务数据库Educ

## 实验内容与结果

### 1. Teacher表中Tsex的CHECK约束

```sql
-- 添加CHECK约束
ALTER TABLE Teacher
ADD CONSTRAINT CK_Tsex CHECK (Tsex IN ('男', '女'));

-- 测试合法操作
INSERT INTO Teacher (TID, Tname, Tsex) VALUES ('20230001', '张三', '男'); -- 成功

-- 测试违反约束操作
INSERT INTO Teacher (TID, Tname, Tsex) VALUES ('20230002', '李四', '未知'); -- 失败，违反CHECK约束

-- 删除约束
ALTER TABLE Teacher
DROP CONSTRAINT CK_Tsex;
```

 **结果分析** ：CHECK约束成功限制了Tsex字段只能输入'男'或'女'，其他值会被拒绝。

### 2. Teacher表中Tdept的DEFAULT约束

```sql
-- 添加DEFAULT约束
ALTER TABLE Teacher
ADD CONSTRAINT DF_Tdept DEFAULT 'SE' FOR Tdept;

-- 测试默认值验证
INSERT INTO Teacher (TID, Tname) VALUES ('20230003', '王五'); -- Tdept自动设为'SE'

-- 测试非默认值验证
INSERT INTO Teacher (TID, Tname, Tdept) VALUES ('20230004', '赵六', 'CS'); -- 可以指定其他值

-- 删除约束
ALTER TABLE Teacher
DROP CONSTRAINT DF_Tdept;
```

 **结果分析** ：DEFAULT约束在没有指定Tdept值时自动填充'SE'，但仍允许手动指定其他值。

### 3. 定义rule_sex规则并绑定到Student表

```sql
-- 创建规则
CREATE RULE rule_sex AS @sex IN ('男', '女');

-- 绑定规则
EXEC sp_bindrule 'rule_sex', 'Student.Sex';

-- 测试合法操作
INSERT INTO Student (Sno, Sname, Sex) VALUES ('20230001', '张三', '男'); -- 成功

-- 测试违反约束操作
INSERT INTO Student (Sno, Sname, Sex) VALUES ('20230002', '李四', '未知'); -- 失败

-- 解除绑定并删除规则
EXEC sp_unbindrule 'Student.Sex';
DROP RULE rule_sex;
```

 **结果分析** ：规则成功限制了Sex字段的取值，与CHECK约束效果类似。

### 4. 定义Default_dept默认对象并绑定到Student表

```sql
-- 创建默认对象
CREATE DEFAULT Default_dept AS 'SE';

-- 绑定默认对象
EXEC sp_bindefault 'Default_dept', 'Student.Sdept';

-- 测试默认值验证
INSERT INTO Student (Sno, Sname, Sex) VALUES ('20230003', '王五', '男'); -- Sdept自动设为'SE'

-- 测试非默认值验证
INSERT INTO Student (Sno, Sname, Sex, Sdept) VALUES ('20230004', '赵六', '女', 'CS'); -- 可以指定其他值

-- 解除绑定并删除默认对象
EXEC sp_unbindefault 'Student.Sdept';
DROP DEFAULT Default_dept;
```

 **结果分析** ：默认对象在没有指定Sdept值时自动填充'SE'，但仍允许手动指定其他值。

### 5. 验证级联删除约束

#### 1) NO ACTION类型参照完整性约束

```sql
-- 确保外键约束存在
ALTER TABLE SC ADD CONSTRAINT FK_SC_Course 
FOREIGN KEY (Cno) REFERENCES Course(Cno);

-- 合法插入
INSERT INTO SC (Sno, Cno) VALUES ('20131322001', 'C001'); -- 成功

-- 违反参照完整性插入
INSERT INTO SC (Sno, Cno) VALUES ('20131322001', 'C999'); -- 失败，无此课程
```

#### 2) CASCADE级联删除

```sql
-- 修改约束为CASCADE
ALTER TABLE SC DROP CONSTRAINT FK_SC_Course;
ALTER TABLE SC ADD CONSTRAINT FK_SC_Course 
FOREIGN KEY (Cno) REFERENCES Course(Cno)
ON DELETE CASCADE;

-- 测试删除Course表中的数据
DELETE FROM Course WHERE Cno = 'C001'; -- SC表中Cno='C001'的记录也被删除
```

 **结果分析** ：删除Course表中的记录会导致SC表中对应的记录也被级联删除。

#### 3) UPDATE行为的CASCADE测试

```sql
-- 修改约束为UPDATE CASCADE
ALTER TABLE SC DROP CONSTRAINT FK_SC_Course;
ALTER TABLE SC ADD CONSTRAINT FK_SC_Course 
FOREIGN KEY (Cno) REFERENCES Course(Cno)
ON UPDATE CASCADE;

-- 测试更新Course表中的数据
UPDATE Course SET Cno = 'C100' WHERE Cno = 'C001'; -- SC表中Cno='C001'的记录也被更新为'C100'
```

 **结果分析** ：更新Course表中的主键会导致SC表中的外键也被级联更新。

### 6. 级联更新代码分析

```sql
ALTER TABLE SC ADD CONSTRAINT FK_SC_Course 
FOREIGN KEY (Cno) REFERENCES Course(Cno)
ON UPDATE CASCADE;
```

1. 在SC表中将课程号'C001'改为'C033'：
   * 操作会失败，因为SC表中的Cno是外键，不能直接修改为不存在的值。
2. 在Course表中将课程号'C001'改为'C033'：
   * 操作会成功，并且SC表中所有Cno='C001'的记录会被自动更新为'C033'。

### 7. 插入违反参照完整性的数据

```sql
INSERT INTO SC (Sno, Cno, Grade) VALUES ('20131207001', 'C087', 80);
```

 **结果分析** ：操作会失败，因为：

1. 学生'20131207001'在Student表中不存在
2. 课程'C087'在Course表中不存在

 **解决方法** ：

1. 先在Student表中插入学生记录
2. 在Course表中插入课程记录
3. 然后再执行上述SC表的插入操作

## 实验总结

通过本次实验，我掌握了以下内容：

1. 使用CHECK约束实现用户定义的完整性约束
2. 使用DEFAULT约束设置默认值
3. 使用规则(RULE)和默认对象(DEFAULT)实现更灵活的约束
4. 理解并实践了外键约束的不同级联操作(NO ACTION, CASCADE)
5. 理解了参照完整性的重要性及违反时的处理方式

级联操作在实际数据库设计中非常重要，可以确保数据的一致性，但也需要谨慎使用，避免意外的数据删除或修改。
