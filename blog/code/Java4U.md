---
title: Java实验4：封装、继承和多态的综合练习
slug: Java4-Encapsulation, inheritance, polymorphism-and-comprehensive-exercises
date: 2024-10-23
authors: mlishu
tags: [代码, Java]
keywords: [代码, Java]
---

Java实验，整理出来，供大家参考。

<!-- truncate -->

## 第1关：封装、继承和多态进阶（一）

```Java
package case1;

import java.util.Scanner;

public class Task1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String dogName = sc.next();
        String dogSex = sc.next();
        String dogColor = sc.next();
        String catName = sc.next();
        String catSex = sc.next();
        double catWeight = sc.nextDouble();
        // 通过有参构造函数实例化Dog类对象dog
        // dog调用talk()方法
        // dog调用eat()方法
        /********* begin *********/
        Dog dog = new Dog(dogName, dogSex, dogColor);

        dog.talk();
        dog.eat();
        /********* end *********/
        // 通过有参构造函数实例化Cat类对象cat
        // cat调用talk()方法
        // cat调用eat()方法
        /********* begin *********/
        Cat cat = new Cat(catName, catSex, catWeight);

        cat.talk();
        cat.eat();
        /********* end *********/
    }
}
// 抽象类Pet 封装属性name和sex
// 构造函数初始化name和sex
// 声明抽象方法talk()
// 声明抽象方法eat()
abstract class Pet {
    /********* begin *********/
    String name;
    String sex;

    public Pet(String name, String sex) {
        this.name = name;
        this.sex = sex;
    }

    abstract void talk();
    abstract void eat();
    /********* end *********/
}
// Dog类继承自Pet类 封装属性color
// 构造函数初始化name、sex和color
// 实现自己的talk()方法和eat()方法
// talk()输出'名称：name，性别：sex，颜色：color，汪汪叫'
// eat()输出'name吃骨头'
class Dog extends Pet {
    /********* begin *********/
    String color;

    public Dog(String name, String sex, String color) {
        super(name, sex);
        this.color = color;
    }

    @Override
    void talk() {
        System.out.println("名称：" + name + "，性别：" + sex + "，颜色：" + color + "，汪汪叫");
    }

    @Override
    void eat() {
        System.out.println(name + "吃骨头！");
    }
    /********* end *********/
}

// Cat类继承自Pet类 封装属性weight
// 构造函数初始化name、sex和weight
// 实现自己的talk()方法和eat()方法
// talk()输出'名称：name，性别：sex，体重：weight kg，喵喵叫'
// eat()输出'name吃鱼'
class Cat extends Pet {
    /********* begin *********/
    double weight;

    public Cat(String name, String sex, double weight) {
        super(name, sex);
        this.weight = weight;
    }

    @Override
    void talk() {
        System.out.println("名称：" + name + "，性别：" + sex + "，体重：" + weight + "kg，喵喵叫");
    }

    @Override
    void eat() {
        System.out.println(name + "吃鱼！");
    }
    /********* end *********/
}
```

## 第2关：封装、继承和多态进阶（二）

```Java
package case2;  
  
import java.util.Scanner;  
  
public class Task2 {  
    public static void main(String[] args) {  
        Scanner sc = new Scanner(System.in);  
  
        // 输入中国人的属性  
        String cName = sc.next();  
        String cSex = sc.next();  
        int cAge = sc.nextInt();  
  
        // 输入英国人的属性  
        String eName = sc.next();  
        String eSex = sc.next();  
        int eAge = sc.nextInt();  
  
        // 创建测试类对象test  
        /********* begin *********/  
        // 创建Person类对象person1,引用指向中国人  
        Person person1 = new Chinese(cName, cSex, cAge);  
        // 通过showEat()方法调用Chinese的eat()方法  
        showEat(person1);  
  
        // 创建Person类对象person2,引用指向英国人  
        Person person2 = new English(eName, eSex, eAge);  
        // 通过showEat()方法调用English的eat()方法  
        showEat(person2);  
        /********* end *********/  
  
        // 强制类型转换(向下转型) 调用Chinese类特有的方法shadowBoxing()  
        /********* begin *********/  
        if (person1 instanceof Chinese) {  
            Chinese chinese = (Chinese) person1;  
            chinese.shadowBoxing();  
        }  
  
        // 强制类型转换(向下转型) 调用English类特有的方法horseRiding()  
        if (person2 instanceof English) {  
            English english = (English) person2;  
            english.horseRiding();  
        }  
        /********* end *********/  
    }  
  
    // 定义showEat方法，使用父类作为方法的形参，实现多态，传入的是哪个具体对象就调用哪个对象的eat()方法  
    /********* begin *********/  
    public static void showEat(Person person) {  
        person.eat();  
    }  
    /********* end *********/  
}  
  
// 抽象类Person 封装属性name、sex和age  
// 构造函数初始化name、sex和age  
// 声明抽象方法eat()  
abstract class Person {  
    String name;  
    String sex;  
    int age;  
  
    public Person(String name, String sex, int age) {  
        this.name = name;  
        this.sex = sex;  
        this.age = age;  
    }  
  
    abstract void eat();  
}  
  
// Chinese类继承自Person类  
// 构造函数初始化name、sex和age  
// 重写父类方法eat() 输出'姓名：name，性别：sex，年龄：age，我是中国人，我喜欢吃饭！'  
// 定义子类特有方法shadowBoxing(),当父类引用指向子类对象时无法调用该方法 输出'name在练习太极拳！'  
class Chinese extends Person {  
    public Chinese(String name, String sex, int age) {  
        super(name, sex, age);  
    }  
  
    @Override  
    void eat() {  
        System.out.println("姓名：" + name + "，性别：" + sex + "，年龄：" + age + "，我是中国人，我喜欢吃饭！");  
    }  
  
    void shadowBoxing() {  
        System.out.println(name + "在练习太极拳！");  
    }  
}  
  
// English类继承自Person类  
// 构造函数初始化name、sex和age  
// 重写父类方法eat() 输出'姓名：name，性别：sex，年龄：age，我是英国人，我喜欢吃三明治!'  
// 定义子类特有方法horseRiding(),当父类引用指向子类对象时无法调用该方法 输出'name在练习骑马！'  
class English extends Person {  
    public English(String name, String sex, int age) {  
        super(name, sex, age);  
    }  
  
    @Override  
    void eat() {  
        System.out.println("姓名：" + name + "，性别：" + sex + "，年龄：" + age + "，我是英国人，我喜欢吃三明治！");  
    }  
  
    void horseRiding() {  
        System.out.println(name + "在练习骑马！");  
    }  
}
```
