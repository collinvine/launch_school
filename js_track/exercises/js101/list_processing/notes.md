# 8. Grocery List

**understand**
input: two dimensional array
output: one dimensional array
Rules
  * two dimensional array
  * each inner array has two elements
  * return a one dimensional array with fruit names, duplicating fruit name for the quantity 
    * fruit name (string)
    * fruit quantity (number)

**examples**
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);


**algo**
need to loop over subarrays
then grab the number and print the fruit
use the string repeat method, and get the number for number of repeats
return that

hmm, that's not quite it

another way could be to use the push method to a new array, and keep pushing until








# 7. Sum of Sums

**Understand**
input: arr
output: number
rules:
  * take in array of numbers
  * each arr will have at least 1 integer
  * starting from the first number
    * loop through, sum the numbers progressively each loop
  * return the sum of the sums

**examples**
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

**algo**

Two problems:
* how to sum (reduce is an easy way to do this)
* how to isolate the portion of the array




# 6. Palindrome Substrings

This isn't too different from the below. However, the additional step is to compare substrings to their reverse and see if they are the same.

`substring === substring.reverse()`

if it is, then add it to the list. To do that, need to get all substrings in an array, then filter it to add results to a new array. Simple enough.

Write a new function that, one by one, looks at each element in the array and compares it to the reverse of that element and sees if it is the same. If yes, filter to a new array.





# 5. All substrings

**understand**
Input: string
Output: array of all substrings
Rules
  * take in a single string
  * return an array of all substrings

**Examples**
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

**algo**
Same as before, but this time loop twice?








# 4. Leading Substring

**Understand**
input: string
output: array of substrings
rules:
  * take in a single string
  * return an array of all possible substrings
    * start from the first char in the string
  * order the return from shortest to longest

**examples**
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

**algo**
split string by character
initiate new empty array
loop over split string
  push to new array a concatenated value of the char at curr index of split string, and the previous value in the new array
sort new array based on length
return










# 3. Multiply All Pairs

**Understand**
input: two arrays of integers
output: one sorted array of integers
rules:
  * multiple each integer from one array with every other integer of the other array
  * return a sorted array in ascending order

**Examples**
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

**Algo**
I think it requires two loops
  * in param 1, multiple it with every value in other array
  * push the results to a new array

It's obvious how I'd do this with a for loop. Maybe I'll build that really quick.










# 2. Alphabetical Numbers

**Understand**
Input: array of integers
Output: Sorted array of integers
Rules:
  * integers are between 0 and 19
  * Each number correlates with the written number
    * 0 => zero
    * 1 => one
    * 2 => two
    * etc.
  * Sort the array alphabetically based on the written value of that integer
    * one, two, zero
    * [0, 1, 2] => [1, 2, 0]

**Example**
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

**Data**
Input: array
Output: array
Algo: object? array methods?

**Algo**
Take in an array
Need a compare method
  * compare value a to value b
  * also need to compare the written out values, though. Use object?


obj = {
  0: "zero",
  1: "one",
  2: "two"
}

the comparison would then look up the object, using the key, and compare the value to see if it should be ahead or behind.

but how do I know what the alphabetical sort is?

array.sort((a, b) => obj[a] - obj[b])?

For some reason, that didn't work in node. I wonder why?



# 1. sum of digits
> Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

**Understand**
Input: number => positive integer
Output: number => the sum of the integer's digits
Rules:
  * don't use `for`, `while`, or `do...while`
  * only use a series of method calls
  * return the sum of all digits

**Example**

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

**Data**
in: number
out: number
algo: ? (string, array)

**Algo**

Take number
Convert to string with toString()
Convert to array with split('')
Add all numbers with reduce()
Use Number(acc) + Number(cur) in reducer callback
