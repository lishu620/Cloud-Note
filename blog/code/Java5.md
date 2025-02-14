---
title: Java实验5：Java中的异常
slug: Java5-java-exception
date: 2024-10-29
authors: mlishu
tags: [代码, Java]
keywords: [代码, Java]
---

Java实验，整理出来，供大家参考。

<!-- truncate -->

## 第2关：捕获异常

```Java
package step2;  
  
import java.util.Scanner;  
  
public class Task {  
    public static void main(String[] args) {  
        Scanner sc = new Scanner(System.in);  
        int num1 = sc.nextInt();  
        int num2 = sc.nextInt();  
        /********* Begin *********/  
        if (num2 == 0) {  
            System.out.println("除数不能为0");  
        } else {  
            System.out.println(num1/num2);  
        }  
        /********* End *********/  
    }  
  
}
```

## 第3关：抛出异常

```Java
package step3;  
  
import java.io.File;  
import java.io.FileInputStream;  
import java.io.FileNotFoundException;  
  
public class Task {  
    /********* Begin *********/  
    public static void main(String[] args) throws FileNotFoundException {  
        test(); // 不捕获异常，直接抛出  
    }  
  
    public static void test() throws FileNotFoundException {  
        File file = new File("abc");  
        if (!file.exists()) { // 判断文件是否存在  
            // 文件不存在，抛出 FileNotFoundException 异常  
            throw new FileNotFoundException("该文件不存在");  
        } else {  
            // 如果文件存在，尝试打开文件  
            FileInputStream fs = new FileInputStream(file);  
        }  
    }  
    /********* End *********/  
}
```

## 第4关：自定义异常

```Java
package step4;  
import java.util.Scanner;  
public class Task {  
    /********* Begin *********/  
    public static void main(String[] args)throws MyException {  
        Scanner sc = new Scanner(System.in);  
        String username = sc.next();  
        //判断用户名  
        if(username.length() < 3 ){  
            throw new MyException("用户名小于三位Exception");  
        }  
        System.out.println("用户名格式正确");  
    }  
}  
class MyException extends Exception{  
    public MyException(){  
    }  
    public MyException(String msg){  
        super(msg);  
    }  
}  
/********* End *********/
```
