# search-word.js

**understand**
input: string and string
output: number
rules
  * take two parameters
    * word
    * string of text
  * return the # of times the word appears in the text
  * can assume that words are broken by spaces

**examples**

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2


**algo**
I need to match the word to the string, and count the number of times it appears.

Seems like there's multiple ways to do this.

1. I can split the text by spaces and loop through the array, checking each word to see if it matches exactly the passed in word. 
  - If yes, increment a counter.
  - If yes, filter that element and then return the length of the filtered array

2. I can use regex to match the string of text to all of the 
  - how can I set the regex to the parameter value?
    new RegExp(param, "g")
  - what method should I use to check if it appears? MatchAll?
  

Interesting, the regex didn't work because i _do_ need to find the _exact_ match. For example, in the tests above, the 'est' matches 0 and 'est,' matches 2. Hmm. 



# wordcap.js


The problem I have to solve for is that the first char may not always be the one that needs to be capitalized.

I need to find the first 

oh wait, no I don't! That wasn't part of the spec. Nice (I bet it'll be part of an upcoming problem.)


# case counter

**understand**
input: string
output: object
rules
  * return object that counts
    * num. of uppercase
    * num. of lowercase
    * num. of neither

**tests**
letterCaseCount('abCdef 123');  
// { lowercase: 5, uppercase: 1, neither: 4 }

letterCaseCount('AbCd +Ef');    
// { lowercase: 3, uppercase: 3, neither: 2 }

letterCaseCount('123');         
// { lowercase: 0, uppercase: 0, neither: 3 }

letterCaseCount('');           
 // { lowercase: 0, uppercase: 0, neither: 0 }


**algo**
regex to check
if for each char.
build an object

the first two parts of the problem seem easy. I forget how to do the third. How can I build a brand new object and increase the count of each value for a given key, or if there's no value, create a new key? I know I've faced this before.










# Uppercase Check

**understand**
input: string
output: boolean (true / false)
rules
  * if all characters of a string are uppercase, true
  * ignore non-alphabetic chars.

**algo**

check if it's an alphabetic char
  * object of alphabetic chars?
  * regexp? regex = /[A-Z]/

  if no, skip, if yes, check

check if it's uppercase

check if all are uppercase

another way to do this is to check the opposite: is any lowercase? if yes, false. if no, true
