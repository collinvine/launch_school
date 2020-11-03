# 8. Grocery List

**Understand**
Input: 





# 4. Leading Substrings

**Understand**
Input: string
Output: array of subtrings from first char
Rules:
  * order the return array shortest to longest



**Algo**
create a new empty array
starting from char at index 0
  loop over rest of string
  slice each substring beginning at index 1 (i.e., 0 and 1)
  for each iteration, push the substring to the array








# 3. Multiply all pairs

**Understand**
Input: two arrays
Output: one array, product of all pairs, sorted

**algo**
want a new array returned
nested loops needed to get through all pairs
map on first inner array, then loop through second array


# 2. Alphabetical Numbers

**understand**
Input: array of integers between 0 and 19
Output: array of those integers sorted by EN word for each num
Rules
  * 

**algo**
need to run a sort algo on the input array
but instead of comparing each element directly, need to compare each elements english word equivalent
how to do that?

Options
* object with key-value pairs
  * create obj with key as digit string `'0'`
  * value is the en word equivalent
* array that's 0 indexed
  * create a new array with english words that have the index position matched to their digit (e.g., 'zero' at index 0)
  * call sort on array, but eval the word at the cur el's index
    `(wordArr[el], wordArr[el2]) => wordArr[el] - wordArr[el2]`
  * return the result

Array is simpler.



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