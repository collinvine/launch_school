# parentheses.js

**understand**
input: string
output: boolean
rules:
  * take in a string 
  * run function to see if parentheses pairs match
  * a match includes:
    * correct ordering of parentheses `(` must come before `)`
      * this `)` then this `(` is false
    * there must be the same number of `(` as `)`


**tests**

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

**algo**
two problems to solve:

1. check the order of parentheses
2. check if the same number of parentheses

order:
  * can have open and close variables
  * if close variable is ever greater than open, return false?

check number:
  * can count each instance
  * after finished counting, compare the values
  * if equal, return true



# reverse-array.js

**understand**
input: array
output: array (same object as input)
rules
  * the function should reverse the array's elements in place
  * it should mutate the original array
  * the original array and returned array should point to same object
  * do not use the .reverse() method

**tests**

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

**algo**

The only real hard part is finding a way to mutate the original array.
What's the best solution for that? Shift / Unshift / Pop / Push?

Splice will alter an array in place. That's what I need.

So I have to take idx by idx and add them to the start of the array using unshift?






# middle.js

**understand**
input: a non-empty string
output: the middle char(s) of the string
rules
  * if it's an odd-length string, return 1 char
  * if it's an even-length string, return 2 chars
  * the return is a string

**tests**
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

**data**
input is string
output is string
algo is … string or array

**algo**
Two problems:

1. finding the middle
2. dealing with even length strings (two scenarios)

to find middle, can do length % 2 === 0?
need two cases depending on length





# reverse-number.js

**understand**
input: number
output: reversed number
rules
  * take in a positive integer
  * return that integer but with the numbers in reversed order
  * leading zeros in the result will get dropped, that's okay.

**tests**
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

**algo**
problems to solve:

1. get the number into a workable format
2. reverse the digits
3. get back to a number for the return

isn't there a .reverse function on an array?

I think I can do all of this in one line with:

`Number(num.toString().split('').reverse().join(''))`




# double-char2.js
**understand**
Same as last prob, this time only double consonants.

**examples**
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

**algo**
One problem: how to know if it is a consonant?
  * regex
  * save all consonants to an array as a const
  * save all vowels to an array, and test that it's not included
    * this won't work, cause it'll double punctuation and numbers

using regex, I can do:
```
let regex = /[bcdfghjklmnpqrstvwxys]/gi;

regex.test(char)

```



# double-char.js

**understand**
Input: string
Output: string
Rules
  * take a string
  * returns a new string
  * new string should double every char in the string
  * case sensitive

**examples**
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

**algo**

iterate over each character
concatenate with plus operator?
return a new string

Problems to solve:

access every char in the string
  * can use a for loop for that

need a new string to return
  * instantiate in function
  * save results of each loop to string
  * return new string once done

Double each char
  * can access each char
  * save to a variable
  * use + operator to concatenate in string
