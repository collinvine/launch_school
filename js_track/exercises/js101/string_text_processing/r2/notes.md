# Staggered Caps 2

**Understand**
Input: string
Output: string
Rules
  * the first char should be capitalized
  * the next should be lowercase
  * all non-alphabetic chars should be ignored


**algo**
need to do two things:
  1. know if a char needs to be uppercase or lowercase (boolean)
  2. know if a char is alphabetic or not

If it is alphabetic, then apply the case logic and flip the boolean
If it is not, return the char

keep track of a boolean toggle for case

could do two tests:
  * is alpha char
  * boolean toggle






# 1. Uppercase Check

**Problem**
Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

**Understand**
Input: string
Output: boolean
Rules
  * ignore space and non-alpha chars

**tests**

``` js
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
```

**algo**
can think of two ways to do this:

  1. use regex and match all chars to a regex pattern (or an anti regex pattern)
  2. split string into chars and test each char against a test criteria for case

… let me research 1.

* create a regex for all lowercase letters /[a-z]/g
* match the string to regex pattern and store in a new variable
* use bang on the var and return (will be true if all uppercase, false if not)

