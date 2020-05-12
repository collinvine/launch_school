# Template
1. Understand the problem (inputs, outputs, and rules)
2. Set up your test cases
3. What data structures are you using
4. Describe your algorithm
5. Begin coding

---
## number-to-signed-string.js

rules
  * take a number
  * find out what the sign is (+/-)
  * convert to a string
  * prepend the correct string


## number-to-string.js

input
  * number
output
  * string
* rules
  * integers > 0
  * can't use built in methods

**data**
input: number
output: string
algorithm: ?
  * take number
  * convert to array?


**algorithm**
need a way to get number by number
if I get each num isolated, can look up string from object

one way to do that is to:
  * get length of string
  * isolated the number by dividing by 10 ** length - 1
  * then I get the first num, followed by decimals

How to actually /get/ the first num?
  * assign to variable and to 0 decimals?
  * Math.floor() works, too

Then, I need to return a new number, which "removes" that first digit
  * num = 12345;
    * Math.floor(num / (10 ** (calcLength(num) - i)))
    * returns 1
    * need to push this to an array
  * num = num % (10 ** calcLength(num) - i)
  * i += 1









## string-to-signed-number.js

input
  * signed string

output
  * number

rules
  * must take in a string
  * find out it if it signed or not
  * convert it to a number with the correct sign
  * return the value

**tests**
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

**data**
input: string
output: number
algorithm:
  * take string
  * convert into array
  * return number

**algorithm**

Use an initial if statement? If index 0 === '-', then…
else …





## odd-list.js

input
  * array
output
  * array with only odd indexes
rules
  * tak in an array
  * return a new array with only odd elements
    * odd means item 1, or index 0. Not index 1.

**tests**
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

**data**
array

**algorithm**
oddities takes one argument
return an array with only odd elements

loop through the array?
  * create new array variable
  * for loop
    * push every other item to new array
  * return new array

## penultimate.js

**understand**

input
  * string with at least 2 words

output
  * the second to last word in the string

rules
  * a word is any sequence of non-blank characters
  * may be separated by one or more spaces
  * string will contain at least 2 words always
  * select and return the second to last word in the string

**tests**
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

**data**
input: string
function: array
output: string

**algorithm**
penultimate() takes single argument string
  * split string into array separated by space
  * splice second to last index
    * array.splice(array.length -2 , 1)
  * return splicedArray.toString()





# screaming-hello.js

**understand**

input
  * ask user for name
  * get string from user

output
  * greeting message

rules
  * two messages
    * if the user includes an "!" at end, dif message
    * if not, normal message

**test**

bob => Hello bob
collin! => HI COLLIN. WHY ARE WE SCREAMING?

**data**
strings

**algorithm**
get user input, store in name variable
if name variable includes "!", message, else message2

maybe ternary operator?




# welcome-stranger.js

**Understand**

input
  * function takes two arguments
    * array (person's full name)
    * object (person's title and occupation)
output
  * print message using name and title and occupation

rules
  *

**Test cases**

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

**data**

input:
  * array
  * object
output:
  * string

**algorithm**

* create welcomeStranger function with two arguments (name, work)

* get full name in array
  * name.join(' ')
* get title from object
  * work.title
* get occupation from object
  * work.occupation
* log to console (can all be in one line)
