# hard-q4.js

**understand**
input   
  * string
output
  * boolean
rules
  * take a string
  * evaluate whether it's an ip address
    * return true if yes
      * must contain four dot-separated numbers between 0–255
    * return false if no

**test**
4.5.5 ==> false
1.2.3.4.5 ==> false
101.99.1.15 ==> true

**data**
input: string
algorithm: array
return: boolean

**algorithm**
how to check if more or less than 4 digits?
  * array.length
  * if !== 4, return false



# med1-q3.js

**understand**
input
  * a number > 0
output
  * array with all factors of the number
rules
  * pass in a number > 0
    * not 0
    * not > 0
  * find all factors of that number
  * return them in an array

**test**

num = -1 ==> try again
num = 0  ==> try again
num = 2  ==> [2, 1]
num = 4 ==> [4, 2, 1]
num = 10 ==> [10, 5, 2, 1]

**data**
input: number
output: array of numbers




# med1-q2.js

**understand**

Input
  * string
Output
  * string
Rules
  * pass in string as argument
  * reverse capitalization of each character
    * if uppercase, make lowercase
    * if lowercase, make uppercase
  * return new string

**test**

 "The Munsters are creepy and spooky." => "tHE mUNSTERS ARE CREEPY AND SPOOKY."

edgecases
  * whitespaces?
  * numbers?


**data**
input: string
algorith: array
ouput: string

**algorithm**

* pass in string as argument to caseFlipper
* split string into array
* loop over array
  * for each char
    * if uppercase, make lower
    * if lowercase, make upper
* join char to new string
* return new string



# med1-q1.js

**Understand**

Input
  * string
Output
  * string with increasing whitespace padding
Rules
  * loop 10 times
  * add increasing whitespace to string each iteration
  * log string + whitespace

**test**
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!

**data**
string

**algorithm**
set amt of white space to 0
start loop
  loop while whitespace < 10
  log string + padStart by (whitespace + str.length)
  increment whitespace++
break
