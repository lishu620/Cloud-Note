---
title: Java实验4：封装、继承、多态  
slug: Java4-Encapsulation, inheritance, polymorphism
date: 2024-10-22
authors: mlishu
tags: [代码, Java]
keywords: [代码, Java]
---

Java实验，整理出来，供大家参考。

<!-- truncate -->

## 第1关：什么是封装，如何使用封装

```java
package case1;  
public class TestPersonDemo {  
    public static void main(String[] args) {  
        /********* begin *********/  
        // 声明并实例化一Person对象p  
        Person p = new Person();  
        // 给p中的属性赋值  
        p.setName("张三");  
        p.setAge(18);  
        // 调用Person类中的talk()方法  
        p.talk();  
        /********* end *********/  
    }  
}  
// 在这里定义Person类  
class Person {  
    /********* begin *********/  
    private String name;  
    private int age;  
    public String getName() {  
        return name;  
    }  
    public void setName(String name) {  
        this.name = name;  
    }  
    public int getAge() {  
        return age;  
    }  
    public void setAge(int age) {  
        this.age = age;  
    }  
    void talk() {  
        System.out.println("我是：" + name + "，今年：" + age + "岁");  
    }  
    /********* end *********/  
}
```

## 第2关：什么是继承，怎样使用继承

```java
package case2;  
public class extendsTest {  
    public static void main(String args[]) {  
        // 实例化一个Cat对象，设置属性name和age，调用voice()和eat()方法，再打印出名字和年龄信息  
        /********* begin *********/  
        Cat cat = new Cat();  
        cat.setName("大花猫");  
        cat.setAge(6);  
        cat.voice();  
        cat.eat();  
        System.out.println(cat.getName() + cat.getAge() + "岁");  
        /********* end *********/  
        // 实例化一个Dog对象，设置属性name和age，调用voice()和eat()方法，再打印出名字和年龄信息  
        /********* begin *********/  
        Dog dog = new Dog();  
        dog.setName("大黑狗");  
        dog.setAge(8);  
        dog.voice();  
        dog.eat();  
        System.out.println(dog.getName() + dog.getAge() + "岁");  
        /********* end *********/  
    }  
}  
class Animal {  
    /********* begin *********/  
    private String name;  
    private int age;  
    public String getName() {  
        return name;  
    }  
    public void setName(String name) {  
        this.name = name;  
    }  
    public int getAge() {  
        return age;  
    }  
    public void setAge(int age) {  
        this.age = age;  
    }  
    /********* end *********/  
}  
class Cat extends Animal {  
    // 定义Cat类的voice()和eat()方法  
    /********* begin *********/  
    public void voice() {  
        System.out.println(super.getName() + "喵喵叫");  
    }  
    public void eat() {  
        System.out.println(super.getName() + "吃鱼");  
    }  
    /********* end *********/  
}  
class Dog extends Animal {  
    // 定义Dog类的voice()和eat()方法  
    /********* begin *********/  
    public void voice() {  
        System.out.println(super.getName() + "汪汪叫");  
    }  
    public void eat() {  
        System.out.println(super.getName() + "吃骨头");  
    }  
    /********* end *********/  
}
```

## 第3关：super关键字的使用

```java
package case3;  
  
public class case3 {  
    public static void main(String[] args) {  
        // 实例化一个Student类的对象s，为Student对象s中的school赋值，打印输出信息  
        /********* begin *********/  
        Student zhangsan = new Student();  
        zhangsan.name = "张三";  
        zhangsan.age = 18;  
        zhangsan.school = "哈佛大学";  
  
        zhangsan.printInfo();  
        /********* end *********/  
    }  
}  
  
class Person {  
    /********* begin *********/  
    String name;  
    int age;  
  
    void printInfo(){  
        System.out.print("姓名：" + name + "，年龄：" + age);  
    }  
    /********* end *********/  
}  
  
class Student extends Person {  
    /********* begin *********/  
    String school;  
  
    void printInfo(){  
        super.printInfo();  
        System.out.print("，学校：" + school);  
    }  
    /********* end *********/  
}
```

## 第4关：方法的重写与重载

```java
// 我是：张三，今年：18岁，我在哈佛大学上学  
  
package case4;  
  
public class overridingTest {  
    public static void main(String[] args) {  
        // 实例化子类对象s，调用talk()方法打印信息  
        /********* begin *********/  
        Student zhangsan = new Student();  
        zhangsan.name = "张三";  
        zhangsan.age = 18;  
        zhangsan.school = "哈佛大学";  
  
        zhangsan.printInfo();  
        /********* end *********/  
  
    }  
}  
  
class Person {  
    /********* begin *********/  
    String name;  
    int age;  
    /********* end *********/  
}  
  
class Student extends Person {  
    /********* begin *********/  
    String school;  
  
    void printInfo(){  
        System.out.print("我是：" + name + "，今年：" + age+ "岁，我在" + school + "上学");  
    }  
    /********* end *********/  
}
```

## 第5关：抽象类

```java
package case5;  
  
public class abstractTest {  
    public static void main(String[] args) {  
        /********* begin *********/  
        // 分别实例化Student类与Worker类的对象，并调用各自构造方法初始化类属性。  
        Student student = new Student("张三",20,"学生");  
        Worker worker = new Worker("李四",30,"工人");  
        // 分别调用各自类中被复写的talk()方法 打印信息。  
        System.out.println(student.talk());  
        System.out.println(worker.talk());  
        /********* end *********/  
  
    }  
}  
  
// 声明一个名为Person的抽象类，在Person中声明了三个属性name age occupation和一个抽象方法——talk()。  
abstract class Person {  
    /********* begin *********/  
    String name;  
    int age;  
    String occupation;  
  
    public Person(String name, int age, String occupation) {  
        this.name = name;  
        this.age = age;  
        this.occupation = occupation;  
    }  
  
    abstract String talk();  
    /********* end *********/  
}  
  
// Student类继承自Person类，添加带三个参数的构造方法，复写talk()方法 返回姓名、年龄和职业信息  
class Student extends Person {  
    /********* begin *********/  
    public Student(String name, int age, String occupation) {  
        super(name, age, occupation);  
    }  
  
    @Override  
    String talk() {  
        return "学生——>姓名：" + name + "，年龄：" + age + "，职业：" + occupation + "！";  
    }  
    /********* end *********/  
}  
  
// Worker类继承自Person类，添加带三个参数的构造方法，复写talk()方法 返回姓名、年龄和职业信息  
class Worker extends Person {  
    /********* begin *********/  
    public Worker(String name, int age, String occupation) {  
        super(name, age, occupation);  
    }  
  
    @Override  
    String talk() {  
        return "工人——>姓名：" + name + "，年龄：" + age + "，职业：" + occupation+ "！";  
    }  
    /********* end *********/  
  
}
```

## 第6关：final关键字的理解与使用

```java
package case6;  
public class finalTest {  
    public static void main(String args[]) {  
        Bike1 obj = new Bike1();  
        obj.run();  
        Honda honda = new Honda();  
        honda.run();  
        Yamaha yamaha = new Yamaha();  
        yamaha.run();  
    }  
}  
//不可以修改 final 变量的值  
// final方法,不可以重写  
//// 不可以扩展 final 类  
//请在此添加你的代码  
/********** Begin *********/  
class Bike1 {  
    int speedlimit = 90;// final variable 将final删掉  
    void run() {  
        speedlimit = 120; // 不可以修改 final 变量的值  
        System.out.println("speedlimit=120");  
    }  
}  
class Bike2 {  
    void run() {// 将final删掉  
        System.out.println("running");  
    }  
}  
class Honda extends Bike2 {  
    void run() { // final方法,不可以重写  
        System.out.println("running safely with 100kmph");  
    }  
}  
class Bike3 { // 将final删掉  
}  
class Yamaha extends Bike3 { // 不可以扩展 final 类  
    void run() {  
        System.out.println("running safely with 100kmph");  
    }  
}  
/********** End **********/
```

## 第7关：接口

```java
package case7;  
  
import javax.xml.crypto.dsig.spec.XSLTTransformParameterSpec;  
  
public class interfaceTest {  
    public static void main(String[] args) {  
        // 实例化一Student的对象s，并调用talk()方法，打印信息  
        /********* begin *********/  
        Student student = new Student();  
        System.out.println(student.talk());  
        /********* end *********/  
  
    }  
}  
  
// 声明一个Person接口，并在里面声明三个常量：name、age和occupation，并分别赋值，声明一抽象方法talk()  
interface Person {  
    /********* begin *********/  
    String name = "张三";  
    int age = 18;  
    String occupation = "学生";  
  
    String talk();  
    /********* end *********/  
}  
  
// Student类继承自Person类 复写talk()方法返回姓名、年龄和职业信息  
class Student implements Person {  
    /********* begin *********/  
    @Override  
    public String talk() {  
        return "学生——>姓名：" + name + "，年龄：" + age + "，职业：" + occupation + "！";  
    }  
    /********* end *********/  
}
```

## 第8关：什么是多态，怎么使用多态

```java
package case8;  
  
public class TestPolymorphism {  
    public static void main(String[] args) {  
        // 以多态方式分别实例化子类对象并调用eat()方法  
        /********* begin *********/  
        Animal dog = new Dog();  
        Animal cat = new Cat();  
        Animal lion = new Lion();  
  
        dog.eat();  
        cat.eat();  
        lion.eat();  
        /********* end *********/  
    }  
}  
  
// Animal类中定义eat()方法  
class Animal {  
    /********* begin *********/  
    void eat() {  
        System.out.println("Animal eats food");  
    }  
    /********* end *********/  
}  
  
// Dog类继承Animal类 复写eat()方法  
class Dog extends Animal {  
    /********* begin *********/  
    @Override  
    void eat() {  
        System.out.println("eating bread...");  
    }  
    /********* end *********/  
}  
  
// Cat类继承Animal类 复写eat()方法  
class Cat extends Animal {  
    /********* begin *********/  
    @Override  
    void eat() {  
        System.out.println("eating rat...");  
    }  
    /********* end *********/  
}  
  
// Lion类继承Animal类 复写eat()方法  
class Lion extends Animal {  
    /********* begin *********/  
    @Override  
    void eat() {  
        System.out.println("eating meat...");  
    }  
    /********* end *********/  
}
```
