_Coding the "Watch others code" problems_
_See [here](https://launchschool.com/lessons/cdfe3681/assignments/e1c213df)_

# Prob 1: Next Largest Integer
https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_final_js_1.mp4

**Problem**
You have to create a function that takes  sapositive integer number and returns the next biggest number formed by the same digits:

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







