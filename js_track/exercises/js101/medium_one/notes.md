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