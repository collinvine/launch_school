

# Problem 1

Two words are anagrams of each other if they both contain the same letters.

Write a method that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
[]

--

**Understand**
Input: string & array of strings
Output: array 
Rules
  * an anagram is when two words contain the same letters
  * return an array of all anagrams of the first string
  * if no anagrams, return an empty array
  * questions
    * does case matter? can't tell from examples. Assume no
    * what about non alphabetic chars? Assume no

**Algo**

From string arg, check if elements in array are anagram of arg
iterate through each element. if element passes anagram test, store in new array
  * use filter method(?)
  * need anagram test

anagram test:
  * check whether each char in word is included in str
    * split word into chars
    * forEach char, check if is included in str
    * if ALL are included, return true
    * if not, return false

Problem: how to check for duplicate chars?
  * didn't get to this …  


---

# Problem 2

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
-- should be 6: [4, -1, 2, 1]
Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum. Note that the empty array is also a valid subarray.


console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true


**Understand**
Input: array of numbers
Output: number, sum of longest sequence || zero
Rules
  * if all numbers are negative, return zero
  * if empty array, return zero

**Algo**

set sum = 0
starting at index 0, create subarrays of all possible sequences (length 1, length 2, length 3, etc)
  * store a subarray
  * sum subarray
    * reduce
  * check if subarray's sum is greater than current sum
    * if yes, sum = new sum
check each sequence's sum
if sum is largest than previous sum, record sum as next largest sum
return sum





















---
# Problem 3

The objective is to return all pair of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

console.log(differenceOfTwo([1, 2, 3, 4]));
[[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
[[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
[[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
[[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
[[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
[]


**understand**
input: array
output: array