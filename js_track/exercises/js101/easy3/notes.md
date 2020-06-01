# easy3.10 century.js

**understand**




**algo**
Need to find two things:
  1. the century
  2. the suffix

The logic for century can be to devide the num by 100 and round up to nearest integer: `Math.ceil(year / 100)` --> century

That leaves the logic for the suffix.

1st
2nd
3rd
4–10th
21st
22nd
23rd
31st

So, need to convert the num to string, find the last index, determine what it is, and return the appropriate suffix. `num.toString().slice(-1)`



# easy3.9 cleanup.js

**understand**
input: string
output: string
rules
  * take in string with words and non-alphabetic chars
    * _what's a non-alphabetic char?_
  * check all chars
    * if alphabetic char, keep
    * if non alphabetic char convert to space
    * if more than 1 space occur in a row, only include 1
    * the return string should not have multiple spaces
    * but can have spaces at start and end
  * return new string with only alph chars

**tests**
cleanUp("---what's my +& line?");    // " what s my line "

**data**
input: string
output: string
algo:
  * array to check each char
  * maybe object to test whether char is alphabetic?
    * could have obj with inclusive chars?
    * I wonder if there's another way to test that?

**algo**

Split given string into array separated by each char
Iterate through each char
  If char is alphabetic, push to new string
  If char is not
    Test if there's two non-alph chars in a row
      if no, convert char into space and add to string
      if yes, discard current char
Return a new string








# easy3.4 fibonacci.js

**understand**
input: number, representing length
output: number, representing index
rules
  * write a function that takes one arg
  * the arg represents the length of the number
  * the return should be the index of the first num in the fibonacci sequence that has a length equal to the passed number

**tests**
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

**data**
input: number
output: number
algo: array

**algorithm**
* set fibonacci array equal to [1]
* write an algorithm to check if the last number in array has the length submitted (array.length - 1)
  * if it does, get the index and return
  * if it doesn't, calculate the next fibonacci num, push to array, and check again
  * keep looping until you find the first num with that length


# easy3.3 stringy.js

**understand**
input: number
output: string of 101
rules
  * first number is 1
  * the length is equal to the number

**tests**
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

**data**
input number
output string

**algo**
use a boolean to control the flow? if true, then; if false, then. switch each loop?
use a switch case loop?
hmm, maybe can use even / odd numbers as I loop?
start at 1 = odd = 1

algo can be: if current num is odd, 1; if even, 0


# easy3.2 bannerizer.js

**understand**
input
  * string
output
  * some crazy ass banner
rules
  * take string
  * print it to console within a banner box
  * banner box properties:
    * starts with top row of +---+
      * first char is +
      * next sequence of char is - string.length + 2
      * end char is +
    * 1 line of padding
      * first char is |
      * string.length + 2 is empty space
      * last char is |
    * string line
      * first char is |
      * second char is " "
      * string
      * then " "
      * last char is |
    * 1 line of padding, as above
    * bottom banner row, as above
    * 1char wider than string on each end

**tests**

logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

**data**
input: string
algo: string (?)
output: banner (string)

**algorithm**
.repeat method of string
let dashes = '-'
let spaces = ' '

then do a bunch of console.logs following the rules


# easy3.1 double.js

**understand**
input
  * string
output
  * string
rules
  * take a string
    * empty; single letter; multi word
  * remove all consecutive duplicate characters
  * questions
    * numbers?
    * duplicate spaces?
    * case-sensitive?
  * return new string with duplicates removed

**tests**
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

**data**
input: string
algo: array
output: string

**algorithm**

> the below is garbage; instead, I solved it more elegantly while writing code. Hmm…

create empty array = []
create prevChar string = ''
split string into characters .split('')

loop over chars
  * check if current char is the same as prevChar
    * if yes, continue
    * if no, push to empty array


split string into words => string.split(' ')
loop using forEach
  * split each word into chars word.split('')
  * loop over each char
    * if same as previous, discard
    * if not, push to array
  * join array
