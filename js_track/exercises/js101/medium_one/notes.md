# fibonacci memoization

The current implementation of our fibonacci function is not performant. To make this better, we can reduce the number of calls by _storing_ the results of the ones we've already made.

The typical data structure to do this is an object. Store results in this object, and look up the values. If the property isn't stored, compute.

**understand**
input: an integer representing the fib num we want to calculate
output: the num at that step in the fib sequence
rules:
  * use momoization to reduce the number of lookups needed.

**examples**

**algo**
declare new empty obj
call the fib function and supply an argument
check if the arg value is less than or equal to 2
check if the arg value is stored in our object
if yes, return that value
if no, compute that value and store it in our object
















# fibonacci Procedural

**understand**
input: integer, representing the fib number we want to calculate
output: the number at that step in the fib sequence
Rules
  * instead of using recursion, do with Procedural

**algo**
set fib1 to 1
set fib2 to 1
calculate fib3 as fib1 + fib2
calculate fibn as (fibn - 2) + (fibn - 1)

while len of fib array is less than n, fibn = fibn - 2 + fibn - 1, push to array

then return last value



# Word to Digit

**understand**
input: string
output: string, with number words converted to digit characters
rules
* zero - nine should convert to 0 to 9
* string should be returned with those convertions made

**examples**

`wordToDigit('Please call me at five five five one two three four. Thanks.');`
// "Please call me at 5 5 5 1 2 3 4. Thanks."


**algo**

convert sentence to array split by space
loop over each word and check if a num word
  if yes, convert to digit char and return
  if no, return word
join word and return as new string

other problem: dealing with non-alphabet characters. hmm.





# Stack Machine Interpretation

Stack:
  * grows and shrinks dynamically
  * implemented as array using `pop()` and `push()`

Stack and register
  * uses a stack of values
  * operates on a register, which is:
    * not part of the stack
    * thought of as the current value

Example
  * operation operates on 2 values
  * takes the topmost item from the stack and the value in the register
  * runs the operation on those 2 values
  * saves the result back to the register

MULT example
  * takes the value from the stack
  * takes the value from the register
  * multiplies them
  * stores the result in the register


Required commands:
  * n
  * PUSH
  * ADD
  * SUB
  * MULT
  * DIV
  * MOD
  * POP
  * PRINT


**understand**
Input: string of commands, each command having a different meaning
Output: integer
Rules
  * initialize stack and register values to `[]` and `0`
  * see above for commands
  * all operations are integer operations

**examples**
_see exercise page for examples_

**algo**

call function with command argument
initialize stack and register values to their starting values
split argument variable into array
loop through array and act on each command


for the latter, seems like I could do two things:
  * have separate functions for each command
  * have all commands within one function

forEach loop with a case?







# rotation three

**understand**
input: number
output: rotated number
rules:
    * starting at index zero, move the digit to the end of the number
    * then, at the next index, move that digit to the end
    * continue until you get to the end of the number

**examples**
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

**algo**
take in a number
split it into a string or array
starting at index 0
  - move digit at index zero to end
  - increase index to 1
  - move digit at index 1 to end



str = '12345'
    - 23451
    - 24513
    -









# rotation two

**Understand**
Input: two numbers
    - original number
    - the digit to rotate
Output: the rotated number
Rules
    - the second number, `count`,represents the digit to move to the end
        - 1 means last digit
        - 2 means second to last digit
    - based on count, move that digit to the end and shift the other digits to the left of it
    - return the rotated number

**Examples**
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

**algo**

checks
    - digits?
    - second digit is appropriate value?
        - not too big

turn number into string or array
    - either work, what methods are best?
slice the selected number from data
    - num.splice(loc, 1)
return rest of numbers
    -
append sliced number to end
return new number




# rotation one

**understand**
Input: array
Output: array
Rules
    * take in array
        * if not array, return undefined
            * can use typeof, but how to differentiate between object and array?
        * if input is empty array, return an empty array
    * return a new array with the first element pushed to the end

**algo**

check passed in value
    * if array, continue
    * else, return undefined
create a new array
push the elements 1 until end to new array
push element 0 to new array
return new array
