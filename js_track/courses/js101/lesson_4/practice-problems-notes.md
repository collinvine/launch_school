# Problem 11
> create an object that expresses the frequency with which each letter occurs in this string.

**Understand**
input: string
output: object
rules
  * count the frequency of each letter in the input
  * return an object that shows the letters and their frequency
  * not case-sensitive?
  * what about spaces?

**test**
let statement = "The Flintstones Rock";
> { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

**algorithm**

turn the string into an array with .split(' ')
  * this gets me each word on it's own
  * now I need to split that further? into each letter?
create an empty object {}
loop over string
  save the current elem as the key and the value as value += 1?















# Problem10
> pick out the minimum age for the munster family object

input: object
output: number
rules
  * compare all values
  * find the lowest number and return it

**algorithm**
instantiate new variable and assign value to first element
run a comparison of current value to saved value
  if current value is less, save to variable
  if not, continue

> I solved it, but the hint was to check out the spread operator. Let me see if I can solve it with that, too.

Ah, it required the Math.min function. Hmm:

> Math.min(...agesArr); >> 10


# Problem8

> let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
> Write a program that uses this array to create an object where names are the keys, and values are the positions in the array.
> { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

Input: array
Output: object
Rules:
  * use the elements in the array as the object's keys
  * use the index in the array as the object's values

Algorithm
instantiate a new object
run a forEach loop on the array
save each element as a key
save the index as the value
push this to the object






# Problem7
> What's the return value of map?
> ['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

The map creates a new array with the transformed results of the original array. In this case, it's doing a filtering test before returning a value.

The test it runs, for elements longer than 3, will pass on all of them. Therefore, I think it should return a new array with all the elements that passed that test.

['ant', 'bear']

This does seem like an improper use of map, though.

Oh! The test is whether it's _greater_ than 3. That was a mistake.
Since the first value fails the if statement, another value will be returned.

Turns out that is `undefined`

# Problem6
> How does fill method work? Is it destructive?
> let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

The fill method takes three arguments:
- the value to fill the array with
- the start index
- the end index

Since 1 is passed in as the value, then it'll replace the current values with 1. That means the array will become [1, 1, 1, 1, 1].

It is destructive.

I'm just not sure what it does when the end index is higher than the length? MDN shows that it does nothing. So return will be a modified array equaling:

> [1, 1, 1, 1, 1]



# Problem5
> What's the callback's return value? What is the return value of `every`?
> [1, 2, 3].every(num => {
    return num = num * 2;
  });

Every checks whether _all_ elements pass the test.
Since this test will always result in truthy, then every will return true.
The callback will return the number multiplied by 2. Which is true.
So, callback returns:

> 2, 4, 6
> true




# Problem4
> WHat is the return value?
> ['ant', 'bear', 'caterpillar'].pop().length

Since pop removes the last element and **returns** that element, the .length
is on the result of the first statement. Thus, the result of that first
statement is just 'caterpillar' and the length is 1. (Or, does it return something other than an array? Oh, it does…it returns it as a string. Hmm, can you call .length on a string? Oh of course you can. So it'll be length of the string, which is … 11. That's my answer. 11)




# Problem3
> same question as below, but written all on one line

This time it'll return what I originally thought because when an arrow
function is written on a single line, it doesn't need an explicit return


# Problem2
> What's the return value?
> [1, 2, 3].map(num => {
>   num * num;
> });

Map returns a new array with a transformed value for each element.
Each element is transformed, so there will be a new array:
> [1, 4, 9]

Fooled! There's no explicit return, so the return is undefined.
[ undefined, undefined, undefined ]



# Problem1

> What is the return value of the below?
> `[1, 2, 3].filter(num => 'hi');`

Since 'hi' will always be truthy, all elements will pass.
Thus, it should return a new array with all elements inside.
> [1, 2, 3]
