---
title: Python实验4：序列
slug: Python4
date: 2024-11-17
authors: mlishu
tags: [代码, Python]
keywords: [代码, Python]
---

在进行Python学习时，进行了实验，于是将其整理出来，供大家参考。

<!-- truncate -->

## 1.输入一个非空字符串，去除重复的字符后，从小到大排序，输出为一个新字符串

```Python
def process_string(s):
    unique_sorted_chars = sorted(set(s))
    return ''.join(unique_sorted_chars)

s = input("请输入一个非空字符串：")

result = process_string(s)
print("去除重复字符后并排序的新字符串是:", result)
```

## 2.输入一个字符串（包括大小写字母和空格），除去空格输出在字符串中出现过的字符

```Python
def unique_characters(s):
    unique_chars = set(s.replace(" ", ""))
    return ''.join(unique_chars)

s = input("请输入一个字符串（包括大小写字母和空格）：")

result = unique_characters(s)
print("去除空格后出现过的字符:", result)
```

## 3.使用给定的整数n，编写一个程序生成一个包含(i, i*i)的字典，该字典包含1到n之间的整数(两者都包含)。然后程序打印字典
```Python
def generate_square_dict(n):
    square_dict = {i: i * i for i in range(1, n + 1)}
    return square_dict

n = int(input("请输入一个整数 n："))
result = generate_square_dict(n)
print("生成的字典是:", result)
```

## 4.输入一个字符串，统计每个字符出现的次数

```Python
def count_characters(s):
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    return char_count

s = input("请输入一个字符串：")
result = count_characters(s)
print("每个字符出现的次数:", result)
```

## 5.输入一个正整数m(20≤m≤100)，计算11+12+13+…+m的值

```Python
def calculate_sum(m):
    return sum(range(11, m + 1))

m = int(input("请输入一个20到100之间的正整数 m："))
result = calculate_sum(m)
print("11到", m, "之间所有整数的和是:", result)
```

## 6.从键盘读入一组数据（以半角逗号‘,’分割）存在一个列表中，并将列表按是否是素数分解为两个列表，统计输出这两个列表

```Python
	def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def separate_primes(data):
    primes = []
    non_primes = []
    for num in data:
        if is_prime(num):
            primes.append(num)
        else:
            non_primes.append(num)
    return primes, non_primes

data = list(map(int, input("请输入一组数据（以半角逗号分隔）：").split(',')))
primes, non_primes = separate_primes(data)

print("素数列表:", primes)
print("非素数列表:", non_primes)

```
