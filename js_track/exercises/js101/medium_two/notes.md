# 8. Longest Sentence

**Understand**
input: string (a bunch of sentences)
output: log to the console:
  * the longest sentence
  * the count of words in that sentence
rules
  * sentences are split by `.` `!` or `?`
  * must preserve all string characteristics (case, punctuation, spacing)


**algo**







# 7. Bubble Sort

**Understand**
input: array
output: sorted array
rules
  * implement a bubble sort algorithm 
  * bubble sort continually iterates over the array comparing two elements at a time
    * if the first element is greater than the second element, swap
    * else, no swap
  * keep iterating until a full iteration with no swaps
  * the swapping needs to happen in place, meaning it mutates the original

**examples** 
see exercise page for test case

**algo**
how to move elements in place?
how to keep comparing until no more swaps?

take an array
get first two elements
compare them
if first is greater than second, swap (else leave)
get next two elements
compare them

if there was a swap during iteration, iterate again
if there wasn't, stop iterating and return array






# 5. Featured Numbers

**Understand**
input: number
output: number which is _next_ feature number
rules
  * featured number is:
    * multiple of 7
    * odd
    * each digit occurring only once
  * algo needs to
    * return next feature number from given number
  * max value is 9876543201

**examples**
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

**algo**

Need a way to test numbers for:
  * is it divisible by 7?
  * is it odd?
  * are all numbers unique (don't repeat)?
  * if yes, return true
  * if no, return false

this could be a good while loop. while( !fn(num) ) { increment num }

check if divisible by 7:
  * num % 7 === 0

check if odd:
  * num % 2 !== 0

check if all digits are unique
  * num.toString().length === new Set(str).size





# 4. Unlucky Days

**Understand**
input: number representing a year
output: number representing number of Friday the 13ths in that year
rules:
  * assume it the year is greater than 1752

**Examples**

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

**Algo**

Two main problems to solve:

* how to know which day is a friday? (day of week)
* how to know which is the 13th day (day of month)

So I have to work with Dates here. I have to transform a number argument into a date formate and work with that. 


Month of year is represented between 0–11
Day of week is represented between 0–6
Date is between 1–31

so I'm looking for 5 (Friday) 13 (date) across all months (0–11) and summing the total.

How do I do that with just the year?

Set a new date object from given year
Iterate over object for each month
In each month, test whether day of month falls on a friday

I can create a new date object by: `new Date(year, month, day)`

With the month zero indexed and the day one indexed.

I need to loop through all months (0 to 11) and check if the resulting `getDay()` value is equal to 5.



# 1. Lettercase Percentage Ratio

**understand**
input: string
output: object containing:
  * % of chars that are lowercase letters
  * % of chars that are uppercase letters
  * % of chars that are neither
rules:
  * string will always have at least one char
  * two decimal places


**algo**
split string
for each char, check:
  * is letter?
    * if yes, is uppercase?
      * if yes, increment `uppercase`
      * if no, increment `lowercase`
    * if no, increment `neither`

How to check for letter?
  regex: `/[A-Z]/g` or `/[a-z]/g`

How to check for case? 
  (see above)

How to convert to percent?
  amt / total * 100

How to get to 2 decimal places?
  .toFixed()