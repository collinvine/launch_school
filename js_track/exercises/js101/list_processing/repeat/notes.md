# 1. Sum of Digits
**understand**
input: integer
output: the sum of all the digits
rules
  * can't use for, while, or do...while loops
  * must use a series of method calls
  * return the sum of all digits

**algo**
convert the digit into a string and then array
use .reduce to find sum
return that sum
return num.toString.split('').reduce((sum, digit) => sum + digit);