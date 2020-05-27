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
