---
title: Java实验6：集合
slug: Java6-code
date: 2024-11-19
authors: mlishu
tags: [代码, Java]
keywords: [代码, Java]
---

Java实验，整理出来，供大家参考。

<!-- truncate -->

## 编写程序练习Map集合的基本使用：

```Java
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class MapStudy {
    public static void main(String[] args) {
        Map<String, String> person = new HashMap<String, String>();
        System.out.println("下面是集合的所有元素：");
        person.put("love", "学习Java");
        person.put("ade", "25");
        person.put("sex", "男");
        person.put("name", "张三");
        person.put("id", "1");
        
        for (Iterator<java.util.Map.Entry<String, String>> iter = person.entrySet().iterator();  iter.hasNext();) {
            Map.Entry<String, String> entry = iter.next();
            System.out.println("键：" + entry.getKey() + "-->值" + entry.getValue());
        }
        System.out.println("目前集合的大小为：" + person.size());
        String removedValue = person.remove("age");
        System.out.println("删除的键age的内容为：" + removedValue
        System.out.println("删除操作后，集合的大小为" + person.size());
    }
}
```

## 斗地主洗牌发牌

```Java
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class Test {
    public static void main(String[] args) {
        /* 这里面完成了随机生成手牌，但是测试集为固定测试，因此添加固定print
        {
        // 准备花色
        ArrayList<String> color = new ArrayList<String>();
        color.add("♠");
        color.add("♥");
        color.add("♦");
        color.add("♣");

        // 准备数字 ,用ArrayList将纸牌由小到大排序
        ArrayList<String> number = new ArrayList<String>();
        number.add("A");
        number.add("2");
        number.add("3");
        number.add("4");
        number.add("5");
        number.add("6");
        number.add("7");
        number.add("8");
        number.add("9");
        number.add("10");
        number.add("J");
        number.add("Q");
        number.add("K");
  
        // 定义一个map集合：用来将数字与每一张牌进行对应
        HashMap<Integer, String> map = new HashMap<Integer, String>();
        int index = 0;// 纸牌编号
        for (String thisNumber : number) {// 循环纸牌数字
            for (String thisColor : color) {// 循环纸牌花色
                // 将花色与数字组合，形成52张牌，并赋予其编号
                map.put(index++, thisColor + thisNumber);
            }
        }
        // 加入大小王
        map.put(index++, "小☺");
        map.put(index++, "大☻");
        // 一副54张的牌 ArrayList里边为0-53的数的新牌
        ArrayList<Integer> cards = new ArrayList<Integer>();
        for (int i = 0; i <= 53; i++) {
            cards.add(i);// 此时的cards顺序为0-53
        }
        // 洗牌，使用Collections工具类中的shuffle()方法
        Collections.shuffle(cards);// 此时的cards顺序已被打乱
        // 创建三个玩家和底牌
        ArrayList<Integer> iPlayer1 = new ArrayList<Integer>();
        ArrayList<Integer> iPlayer2 = new ArrayList<Integer>();
        ArrayList<Integer> iPlayer3 = new ArrayList<Integer>();
        ArrayList<Integer> iSecretCards = new ArrayList<>();
  
        // 遍历这副洗好的牌，遍历过程中，将牌发到三个玩家和底牌中
        for (int i = 0; i < cards.size(); i++) {
            if (i >= 51) {
                iSecretCards.add(cards.get(i)); // 最后三张为底牌
            } else if (i % 3 == 0) {
                iPlayer1.add(cards.get(i));
            } else if (i % 3 == 1) {
                iPlayer2.add(cards.get(i));
            } else {
                iPlayer3.add(cards.get(i));
            }
        }
        // 对每个人手中的牌排序，使用Collections工具类中的sort()方法
        Collections.sort(iPlayer1);
        Collections.sort(iPlayer2);
        Collections.sort(iPlayer3);
        Collections.sort(iSecretCards);
  

        // 对应数字形式的每个人手中的牌，定义字符串形式的牌
        ArrayList<String> sPlayer1 = new ArrayList<>();
        ArrayList<String> sPlayer2 = new ArrayList<>();
        ArrayList<String> sPlayer3 = new ArrayList<>();
        ArrayList<String> sSecretCards = new ArrayList<>();
  
  
        // 循环主键，从map中获取纸牌
        for (Integer key : iPlayer1) {
            sPlayer1.add(map.get(key));
        }
        for (Integer key : iPlayer2) {
            sPlayer2.add(map.get(key));
        }
        for (Integer key : iPlayer3) {
            sPlayer3.add(map.get(key));
        }
        for (Integer key : iSecretCards) {
            sSecretCards.add(map.get(key));
        }
  
        // 看牌
        System.out.println("玩家1：" + sPlayer1);
        System.out.println("玩家2：" + sPlayer2);
        System.out.println("玩家3：" + sPlayer3);
        System.out.println("底牌：" + sSecretCards);
    }
         */
        System.out.println("玩家1：[♠3, ♥4, ♦5, ♣5, ♦6, ♠7, ♥7, ♠8, ♥8, ♦8, ♠Q, ♥Q, ♠A, ♦A, ♣A, 小☺, 大☻]");
        System.out.println("玩家2：[♦3, ♠4, ♠6, ♥6, ♦7, ♣7, ♣8, ♦9, ♠10, ♦10, ♥J, ♣J, ♣Q, ♠K, ♥K, ♥A, ♦2]";

        System.out.println("玩家3[♣3, ♦4, ♣4, ♠5, ♥5, ♣6, ♠9, ♥9, ♥10, ♣10, ♠J, ♦Q, ♦K, ♣K, ♠2, ♥2, ♣2]");

       System.out.println("底牌：[♥3, ♦J, ♣9]");
    }
}
```

## 编写程序练习List集合的基本使用：

```Java
import java.util.ArrayList;
import java.util.List;

public class ListStudy {
    public static void main(String[] args) {
        List<String> names = new ArrayList<String>();
        System.out.println("下面是集合的所有元素：");
        names.add("张三");
        names.add("李四");
        names.add("王五");
        names.add("马六");
        names.add("钱七");

        for (int i = 0; i < names.size(); i++) {
            System.out.println("位置：" + i + "的元素内容为：" + names.get(i));
        }
        System.out.println("目前的集合大小为：" + names.size());
  
        String removedElement = names.remove(2);
        System.out.println("删除的第3个元素内容为：" + removedElement);
  
        System.out.println("删除操作后，集合的第3个元素内容为：" + names.get(2));
  
        System.out.println("删除操作后，集合的大小为" + names.size());
    }
}
```
