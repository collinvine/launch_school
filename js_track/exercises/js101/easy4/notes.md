# easy4.10 letter-swap.js

**understand**
input: string (a sentence)
output: string
rules:
  * each word in the sentence should have its first and last letters swapped
  * capitalization should remain constant
  * the sentence's words should remain in same order
  * no leading or trailing spaces

**tests**

swap('Oh what a wonderful day it is');  
// "hO thaw a londerfuw yad ti si"

swap('Abcde');                          
// "ebcdA"

swap('a');  
// "a"

**data**
input: string
output: string
algo: array & string

use map function to modify each word in array?

**algo**
need to deal with each word at a time
  `split(' ')``
iterate over each word
  `array.map`
need to store first and last chars in word
  first = word[0]
  last = word[word.length - 1]
need to create new word with chars swapped (?)
  newWord = last + word.slice(1, word.length - 2) + first
  string[last] + string + string[first] ?
need to push new word to new array
  return newWord
need to join and return new string


# easy4.9 letter-counter2.js

same as before, but need to filter non letters. Can use the regex from previous exercise.



# easy4.8 letter-counter.js

**understand**
input: string
output: object
rules:
  * the object's key should be the length of the word
  * the key's value should be the number of words of that length

**tests**

``` js
wordSizes('Four score and seven.');                       
// { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  
// { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              
// { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            
// {}
```

**data**

input: string
output: object

**algo**

Need a new object, and to push values to it
Eventually return the object
The keys are the length as a number ("3")
the values are the sum of all words of that length
The test is whether or not there's a key of that length yet
  * if yes, add 1
  * if no, create it and set value to 1
Can do with ternary operator:
`> (obj["4"] ? obj["4"] += 1 : obj["4"] = 1)`

also need to split string into array
string.split
then iterate over each word






# easy4.5 palindromic2.js

**understand**
input: string
output: boolean
rules
  * case insensitive
  * only alphanumeric chars

**example**
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

**data**
input string
output boolean
algo string & array

**algo**
need to first remove everything that is not alphanumeric
  * new function
  * new string
  * convert to array
  * loop through and return new array with alphanumeric chars only
  * join new array and return new string

Next need to compare both as lowercase in function


# easy4.4 palindromic1.js

Need to take a word, compare it to the same word reversed.

# easy4.1 teddy.js

**understand**
input: no input
output: string, including a rand num between 20–120 inclusive
rules:
  * generate a random number
  * between 20 and 120 inclusive
  * output it as a string

**tests**
Teddy is 69 years old!

**data**
number
string

**algo**
two challenges:

1. generate a random number => `Math.floor(Math.random())`
2. make num between 20 and 120 `?`
  * those represent min and max values, and can be inclusive
  * from MDN, I see: `Math.random() * (max - min) + min`

Need to combine those:
  `Math.floor(Math.random() * (max - min + 1) + min)`

That'll return a random number inclusive. Then with string interpolation, add that to the output.
