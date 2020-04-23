# Template
1. Understand the problem (inputs, outputs, and rules)
2. Set up your test cases
3. What data structures are you using
4. Describe your algorithm
5. Begin coding

---

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
