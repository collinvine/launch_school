# 5. Merged Sorted Lists

**Understand**
Input: two sorted arrays
Output: a new array that's sorted
Rules
  * can't use the sort method on the array
  * must build the array one element at a time
  * the input array's subarrays are sorted


**algo**
if no elements, push
find the first element that is larger than current element, add current element before found element
  * get index of found element

if arr.length = 0, arr.push(curEl)
if arr[0] > curEl, arr.unshift(curEl)
if arr[arr.length - 1] > curEl, arr.push(curEl)
else loop through to find first el that is larger, then that el index, and splice curEl into array





# 4. 90º transpose

``` js
1  5  8
4  7  2
3  9  6
```
``` js
3  4  1
9  7  5
6  2  8
```

0,0 --> 0,2
0,1 --> 1,2
0,2 --> 2,2
1,0 --> 0,1
1,1 --> 1,1
1,2 --> 2,1
2,0 --> 0,0
2,1 --> 1,0
2,2 --> 2,0


``` js
3  4  1
9  7  5
```
``` js
9  3
7  4
5  1
```

0,0 --> 0,1
0,1 --> 1,1
0,2 --> 2,1
1,0 --> 0,0
1,1 --> 1,0
1,2 --> 2,0


Rules:
  * Second index becomes first index:
    * [x,y] --> [y,?]
  * New second index starts at end and works backward for each subarray
    * subarray 1
      * [y, arr.length -1]
    * subarray 2
      * [y, arr.length -2]
      which equals:
        [y, (lastIdx) - outerIndex]
        [y, (lastIdx) - 0]


``` js
let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];
```

```js
[ [], [], [], [] ]

0,0 --> [0,3]
0,1 --> 
0,2
0,3
1,0
1,1
1,2
1,3
```



# 2. Transpose

**Understand**
Input: nested array, called a matrix
Output: a new nested array that's transposed
Rules
  * the original array must not be modified
  * transposing switches the rows and columns

**examples**

``` js
// original
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
```

``` js
// transposed
1  4  3
5  7  9
8  2  6
```

**Algo**

starting with first index
loop over the other indexes first element
returning a new array of elements at first index
then go to second index
create another array with elements in second index position
continue until fully looped

Two loops using map
  outer loop loops over the first level of array starting at index 1, returns an array at index 0
  inner loop loops over array elements again, grabbing all inner elements at index 0
  then add index on each








# 1. Madlibs

**Understand**
Input: text template (string)
Output: filled in text (string)
Rules
  * build list of nouns, verbs, adjectives, adverbs
    * object with "noun" as key and array of nouns as value? obj.key[rand]
  * program should place random words of appropriate type into text then return text
  * define the text template yourself

**Examples**
``` js
function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
```

**Algo**
I need to solve two problems:

1. Creation of the template
2. Replacement of words in template from the list of nouns etc

For one, I can use a string and each time I need a selected word, I can place the name of the word type in the sentence. Then, I can match that with the keys in my replacement object and select a random word from the list.

  * need a way to match
    * regex
    * match
  * need a way to replace
    * replace
  * need a way to replace ALL matches
    * hmm
    * iterate through?
  * need a way to randomize the replacement

Templates can be stored as simple strings:
  * The nouns verbs the nouns's nouns