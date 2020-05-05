# Template
1. Understand the problem (inputs, outputs, and rules)
2. Set up your test cases
3. What data structures are you using
4. Describe your algorithm
5. Begin coding

---

# multiples.js

**Understand**
input
  * number
output
  * sum of numbers that are multiples of 3 & 5
rules
  * ask the user for a number
    * require readline sync
  * pass number into multisum function
    * loop over numbers starting at 1
    * if current number is a multiple of 3 or 5, add. else, skip
    * end loop after computing inputted number
    * return the total sum 


**Test Cases**

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

**Data**
input: string (need to convert)
output: numbers

**Algorithm**
get response from user
convert to number
loop over numbers from 1 to response
if number is multiple of 3 or 5, add
 * skip 1 and 2, not multiples of
 * start at 3
 * if % 3 === 0 || % 5 === 0, sum; else skip
else skip
return sum


# leap_years.js

**Understand**

input
  * integer, represent a year
  * any value greater than 0

output
  * true / false

rules
  * leapYear function with passed argument (year)
  * evaluate if the year is a leap year
    * leap year is any year divisible by 4
      * unless also divisible by 100 then not leap year
      * unless also divisible by 400
    * every leap year HAS to be divisible by 4
      * that can be the first check
      * then
  * return true/false

**test**
See problem page

**Data**
input: number
output: number

**algorithm**
* accept 1 argument to leapYear function
* check if year is a leap year
  * year % 4 === 0
  * if yes, then:
    * year % 100 === 0 && year % 400 === 0
    * false




# short_long_short.js

**Understand**
input
  * two strings

output
  * return one string

rules
  * main problem is to compare the string length
  * assign strings to variables
  * the concatenate
    * short + long + short
  * so, how to compare length?
    * if a.length > b.length
      * a+b+a
    * else
      * b+a+b

**Test cases**
('abc', 'defgh');   -->   "abcdefghabc"
('abcde', 'fgh');   -->   "fghabcdefgh"
('', 'xyz');        -->   "xyz"

**Data**
strings (input and output)
_what if not a string? need to validate? or just treat as string?_

**Algorithm**

* declare new function shortLongShort with two arguments word1 and word2
* let newWord = ""
* compare lengths of words
  * if word1 is shorter, word1+word2+word1
  * if word2 is longer, word2+word1+word2
* return new word

# sum_or_product.js

**Understand**
input
  * number, captured as a string
  * response for sum or multiple

output
  * print the result to the console

rules
  * get user number
    * check for
      * non-negative
      * non-zero
      * non-float?
  * get user response to sum or product
    * if sum, sum all numbers from 1 to number
    * if product, multiply all numbers from 1 to number

**Test cases**

Sum 5 = 15
Product 5 = 120
Sum 0 = error, try again
Sum -1 = error, only positive numbers
Product 10 = 3,628,800

**Data**
input is string
convert to number
output is number

**Algorithm**
Get user input
 * number
 * operation

Calculate value
  * check if operation is "s" or "p"
  * loop from 1 to number
  * each loop, sum || multiply numbers
  * return result

Print result to screen


# tipCalculator.js

**Understand**

input
  * bill amount in dollars (string)
  * tip percentage (string)

output
  * total tip in dollars
  * check total in dollars

rules
  * get user input
    * bill ($)
    * tip (%)
  * convert to numbers
  * calculate total tip
    * bill ($) * tip (%) = total tip
  * calculate total bill
    * bill + total tip
  * print amount

**Test cases**

300 & 15% -->  45 & 345
$10000 1% --> 100 & 10100

**Data**

input is string
convert to number
output is number & string

**Algorithm**

Get user input
  * billAmount
  * tipPercent
Convert from string to numbers
Calculate tipAmount
Calculate totalBill
Log tip and total on new lines

---

# How big is the room

**Understand the Problem**

input
  * 2x user input (string)
    * width
    * length

output
  * result of width * length
    * in meters
    * in feet
      * 1 m^2 = 10.7639 sqft

rules
  * ask user for input: width and length of room in meters
    * convert input from string to number
  * calculate square meters of room
    * width * length = sqm
  * calculate square footage
    * sqm * conversion const.
  * print results to console
    * to 2 decimal places

**Test Cases**

5 x 10 = 50.00 meters, 538.20 feet

**Data structures**  

* input = string
* output = number

**Algorithm**



---

# evenNumbers.js

**Understand the problem**

input
  * numbers 1 to 99
output
  * all even numbers, inclusive
  * each number is on a new line
rules
  * starting at 1
  * eval if current number is even
    * if yes, print
    * if no, skip
  * increment by 1
  * end after evaluating 99

// same as below, but opposite.


---

# oddNumbers.js

**Understand the problem**

input
  * number 1 to 99
output
  * all odd numbers, inclusive
  * each number should be on a new line
rules
  * starting at 1
  * evaluate if the current number is odd
    * if yes, print it to the console on a new line
    * if no, skip
  * end after finished evaluating 99

**Test cases**

oddNumbers() -->
  1
  3
  5
  …
  77
  79
  81
  …
  99

**Data Structures**

numbers

**Algorithm**

* set i to 1
* while i < 100
  * check to see if i is odd
    * i % 2 !== 0
  * if odd, print to screen on new line and increment i
  * if even, skip and increment i
* end after 99


---

# isOdd.js

**Understand the problem**

* Input
  * One integer
* Output
  * String (true or false)
* Rules
  * Take number input
  * Convert to absolute value
  * Compare value to odd comparison
    * Odd comparison → x % 2 = 0
  * If odd, then true
  * If not, then false

**Test Cases**

isOdd(2) → 	false
isOdd(1) → 	true
isOdd(0) → 	false
isOdd(-1) → 	true
isOdd(-2) → 	false

**Data Structure**

Input: number
Algorithm: number


**Describe Algorithm**

Convert input number to absolute value
Compare value to odd comparison
  * X % 2 !== 0
If true, print true
If false, print false
