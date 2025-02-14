---
title: Java实验：文件类
slug: Java-file
date: 2024-11-17
authors: mlishu
tags: [代码, Java]
keywords: [代码, Java]
---

Java实验，整理出来，供大家参考。

<!-- truncate -->

## 第1关：创建文件

```Java
package step1;

import java.io.File;
import java.io.FileFilter;
import java.io.IOException;
import java.util.Scanner;

public class Task {
  public void solution()throws IOException {  
        /********* Begin *********/  
        File file1 = new File("src/output/test.txt");                  
        File file2 = new File("src/output/hello.txt");  
        file1.createNewFile();  
        file2.createNewFile();  
        /********* End *********/  
    }  
}
```

## 第2关：文件的常用操作

```Java
package step2;
  
import java.io.File;
import java.io.FileFilter;
import java.io.IOException;
import java.util.Arrays;
  
public class Task {
    public static void dcFile() throws IOException {
        /********* Begin *********/
        /*
        在src/下创建文件夹test2文件夹；
        删除src/output/下的test2.txt文件；
        在src/test2/目录下创建helloworld.txt文件和step2.txt文件；
        将src/output/目录和src/test2/目录下所有文件的文件名
        按升序排序并打印至控制台。
        */
        File dir1 = new File("src/test2");  
        dir1.mkdir();     
        File deleteFile = new File("src/output/test2.txt");  
        deleteFile.delete();    
        File dir2 = new File("src/output");  
        File createFile1 = new File("src/test2/helloworld.txt");  
        File createFile2 = new File("src/test2/step2.txt");  
        createFile1.createNewFile();   
        createFile2.createNewFile();  
        File[] testFiles = dir1.listFiles();    
        Arrays.sort(testFiles);  
        File[] outputFiles = dir2.listFiles(); 
        Arrays.sort(outputFiles);  
        System.out.println("output目录结构为：");  
        for(File file: outputFiles){  
            System.out.println(file.getName());  
        }  
        System.out.println("test2目录结构为：");  
        for(File file : testFiles){  
            System.out.println(file.getName());  
        }
        /********* End *********/
    }
}
```

## 第3关：文件查看器

```Java
package step3;
  
import java.io.File;
import java.util.Arrays;
  
public class Task {
    /********** Begin **********/
    public void showDirStructure(File file)    {  
        System.out.println("+--" + file.getName());  
        showDirTree(file," ");  
    }  
    public static void showDirTree(File dir,String interval){  
        File[] files = dir.listFiles();  
        Arrays.sort(files);  
        interval += " ";  
        for (File file : files) {  
            if(!file.isDirectory()){  
                System.out.println(interval + "--" +  file.getName());  
            }else{  
                System.out.println(interval + "+--" +  file.getName());  
                showDirTree(file,interval + " ");  
            }  
        }  
    }  
    /********** End **********/
}
```

## 第4关：图片查看器

```Java
package step4;
  
import java.io.File;
import java.io.FileFilter;
import java.util.Arrays;
public class Task {
    /********** Begin **********/
     static FileFilter filter = file ->  {  
        if (file.isFile()) {  
            String fileName = file.getName().toLowerCase();  
            if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".bmp") ||  
                fileName.endsWith(".png") )  {  
                return true;  
            }  
        }  
        if(file.isDirectory()){  
            return true;  
        }  
        return false;  
    };  
     public void showDirStructure(File file)    {  
        System.out.println("+--" + file.getName());  
        showDirTree(file," ");  
    }  
    public static void showDirTree(File dir,String interval){  
        File[] files = dir.listFiles(filter);  
        Arrays.sort(files);  
        interval += " ";  
        for (File file : files) {  
            if(!file.isDirectory()){  
                System.out.println(interval + "--" +  file.getName());  
            }else{  
                System.out.println(interval + "+--" +  file.getName());  
                showDirTree(file,interval + " ");  
            }  
        }  
    }  
    /********** End **********/
}
```
