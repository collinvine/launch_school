# word to digit

**understand**
input: string
output: string with words replaced to digits
rules
  * every occurance of number word should be replaced by it's corresponding digit

**algo**
can use an array to store the number words, marked by index
can access the digit by the index of
can use replace for any match that occurs (?)

loop through array of num words, and check is string has any matches. if yes, make into regex and replace with current index

could do with forEach or for loop, maybe try both

- store word numbers in array, with each index corresponding to the number
- iterate through array
  - create new regex, with gi 
  - try to replace current regex with the current index of the loop

return saved string


# Rotate 3

**Understand**
Input: number
Output: number, with max rotations per rules
Rules
  * starting at the first digit, rotate it to the end
  * next, keep the first digit fixed and rotate the remaining digits
  * next, keep the second digit fixed and rotate the remaining digits

in: 735291
r1: *7*35291 --> 352917
r2: 3*5*2917 --> 329175
r3: 32*9*175 --> 321759
r4: 321*7*59 --> 321597
r5: 3215*9*7 --> 321579
return: 321579

**Examples**
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

**Algo**

keep track of current index of rotation
rotate remaining digits from index position

two problems:
  * dealing with substrings
  * dealing with rotations

substrings
  * keep track of current index
  * slice string from index and pass into rotation fn

rotate
  * return string.slice(1) + string.slice(0, 1)

Need to keep track of:
  * if index is 0
  * when to stop rotating






# rotate 2

**Understand**
Input: two numbers
output: one modified number
rules
  * the second num represents the digit to move, counting from the end of the first number (1 equals the last digit)
    * index can be calculated as length - digit
  * extract that digit and place at the end
  * shift all other digits to the right

**algo**

before: slice(0, idx)
el: slice(idx, idx+1)
after: slice(idx+1)

combine: before, after, el