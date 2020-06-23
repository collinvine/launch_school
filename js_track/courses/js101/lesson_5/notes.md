# prob14.js

**understand**
input: object with obj values w/ nested arrays
output: array w/ nested arrays
rules:
  *

# prob13.js

**understand**
input: nested array
output: nested array sorted by sum of subarray values
rules
  * sum the inner numbers
  * return the sorted array
  * sort based off sum of subarrays
  * oh! sort based off of odd values only

**test**

eg: [1 + 3] < [1 + 7] < [1 + 5 + 3], the sorted array should look like this: [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

**algo**
Need to sum values of inner array and then compare to other summed subarray.

Could possible use reducer function here?

Need to sort, but also sum.

How to sum? .reduce((acc, cur) => acc + cur)


# prob9.js

**understand**
Input: nested array with subarrays of different types
Output: same nested array, but with ordered subarrays
Rules
  * new array should be returned
  * the top level array should be in the same order
  * the subarrays should be ordered, either alpha or num depending on type

**algo**

loop through array
check what type subarray is
if num, do num sorting
if not num, do alpha sorting .sort()
return new array

# prob8.js


**Understand**
Input: object with array as keys
Output: all of the vowels … as string? new array?
Rules:
  * use the forEach method
  * "output" all vowels in the strings in the arrays

**algo**
the challenge is finding out if each char. is a vowel or not.
And they are 1 extra layer deep, within an object.
So first need to convert the obj. to an array to even use the forEach. Maybe the method using the `Object.values()` method. Then I get an array with nested arrays of the words.

I need to eval each char to see if it's a vowel. Two ways I could do that.

1. Split the Object.values() array down further
2. have nested forEach loops

I think I'll do the former, using .join().split('') on the array of values.


# prob3.js

Extract all those gs.


# prob2.js
> How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

Here I need to access the inner element 'published' and compare one object's published date to the other. Can still use a and b, just also need to access each key's value from that.


# prob1.js

Sort this array from largest to smallest

`let arr = ['10', '11', '9', '7', '8'];`

.sort() won't work as it'll sort from sm to lg and sort by 1st char.

Need to supply callback, let them be converted to numbers, and reverse sort by calling b - a.
