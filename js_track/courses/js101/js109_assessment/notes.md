_Coding the "Watch others code" problems_
_See [here](https://launchschool.com/lessons/cdfe3681/assignments/e1c213df)_

# Prob 3: 
https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_js_3.mp4

**Problem**
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

**Understand**
Input: two strings
Output: boolean
Rules
  * not case sensitive?
  * substrings must be longer than 1 char
  * if a string is empty, return false
  * order doesn't matter

**Algo**

Tests:
  * if either string is 1 or less char in length, return false

create an array of substrings from one of the strings
  two sub processes:
    leading substrings (starting at index x, create substrings for each)
for each substring, test to see if it matches a substring in other string
if match, return true; else false






# Prob 2: Substring reconstruction
https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_2_js.mp4

**Problem**
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You mnay assume the given string consists of lowercase EN leters only.

Eg.

Input: 'abab'
Output: true
Explanation: It's the substring 'ab' twice

Input: 'aba'
Output: false

``` js
console.log(repeatedSubstringPattern("abab") === true); // true
console.log(repeatedSubstringPattern("aba") === false); // true
console.log(repeatedSubstringPattern("aabaaba") === false); // true
console.log(repeatedSubstringPattern("abaababaab") === true); // true
console.log(repeatedSubstringPattern("abcabcabcabc") === true); // true
```

**Understand**
Input: string
Output: boolean (true or false)
Rules:
  * string is en letter chars only
  * string is not empty
  * string is lowercase only

**algo**
Take string
Break into substring
  * slice index 0 and x

Test if substring can be combined to match original string
  * is length divisible by length? if no, try next substr
  * is substr length greater than 1/2 str length? if yes, break loop & return false
  * actual test:
    * how many times does substring divide into str length?
    * repeat that many times
    * check for equality between substr + repeat and original str
    * if equal, set boolean to true

Repeat (need to test all versions of substring that "work")

Return boolean result 

Several tests:
  * 1 and prime numbers aside from 2 fail
    * 1, 3, 5, 7, 11, 13, 17, 19, 23, 31, 37, 41, 47, 53, 59, 61, 71, 73, 79, 83, 89, 97
  * if all letters are same and greater than 1, it is true




# Prob 1: Next Largest Integer
https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_final_js_1.mp4

**Problem**
You have to create a function that takes a positive integer number and returns the next biggest number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 --> 2071

If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

**Understand**
Input: positive integer
Output: integer
Rules
  * input is a positve integer
  * return is an integer
  * if, from the digits of the input, you can make a larger number than the one passed in, return that
  * if not, return -1
  * the number returned must be the _next_ largest number 
    * eg. if input is 135, then return should be 153 and not 315

**Algo**

Several checks needed right away:
  * if a single digit number, return -1
  * if all digits are the same, return -1


One way to do this is to find all possible numbers from the digits. 
Then from the list of numbers, order them
Then, check the index of the input

test: Check if there aren't any longer numbers
  * if the index of the input is the same as the length - 1, return -1 (means that it's the last ordered number)

If test passes, return the number at index+1 position (the next number in the list)

**data?**
in is a number
out is an number

but to combine all possible combinations? a string would be better.


**find all possible numbers from the digits.**
How to do this?


123

d1d2d3 (123)
d1d3d2 (132)
d2d1d3 (213)
d2d3d1 (231)
d3d1d2 (312)
d3d2d1 (321)

1 + 23
1 + 32
2 + 13
2 + 31



don't need any more than those. no point getting anything smaller than that (2 digits)




need a helper function that takes in a string
  runs a loop over the 
  uses slice to return strings starting at 1 and ending at index (1, 2; 1, 3; 1, 4;) until index equals length
  returns new array with all possible values







