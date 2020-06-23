# time.js

**understand**
input: signed integer
output: string in hh:mm format
rules:
  * can't use the Date methods
  * a -ve num is the amount of minutes before midnight
  * a +ve num is the amount of minutes after midnight

**tests**
``` js
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
```

**algo**
Three problems:

1. find out the sign of the number
2. convert the minutes to hours and minutes
3. dealing with subtraction or addition logic
4. Dealing with when num of hours is greater than 24

To find sign, could … Math.sign() which'll return either -/+ 1 or 0.

The math is tricky because:
* need to find number of hours & minutes
  * num / 60 = number of hours
  * num % 60 = number of minutes

If num is greater than 24, can find the remainder and use that
  * num % 24 = num to use (add or subtract)


For return, need to pad 0s if only a single digit.



# countOccurrences.js

**understand**
input: array
output: print each unique element & its count
rules:
  * case sensitive. car !== CAR

**tests**
``` js
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
```

**data**
input is array
working is object?
output is string literals

**algo**
two problems to solve:

1. how to count occurrences?
2. how to log answers to console

For 2, can use `for ... in` loop to iterate over an object and print each line.

For 1, need to save to an object. But I forget how to check. Could use ternary operator?

loop through array and save values to new object. If the elem. is not in the obj, create it and set key to 1. If it is, add 1.





# multiplyavg.js

**understand**
input: array of integers
output: string
rules
  * take in array of integers
  * multiply all integers together
  * divide result by number of entries in array
  * return the result as string w/ 3 dec places
    * fix to 3 decimal places
    * then return as string

**tests**
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

**algo**
first, reduce to the product of all numbers
next, divide by length of arr
then, round to 3 dec places
then, convert to string and return

# interleave.js

**understand**
input: two arrays
output: one array
rules:
  * return new array
  * new array must interweave the elements in both arrays
  * assume:
    * arrays are equal length
    * arrays are not empty

**tests**

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

**data**
arrays

**algo**
need to loop over arrays
each loop, take the current index and append to new array
return new array after finished looping

a for loop will work here



# halvsies.js

**understand**
input: array
output: nested array
rules
  * take 1 array
  * return array with two nested arrays as elements
  * first nested array takes first half of original array
  * second nested array takes second half of original array

**tests**
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

**algo**
Two challenges
1. adding to a nested array
2. finding the half-way point of array

half way point
  - find length -1
  -


# combine

**understand**
input: two arrays
output: one array
rules:
  - must remove duplicates

**tests**
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

**data**
in: array
out: array

**algo**
Can first combine arrays so I just have one array
Then have to filter used indexOf and checking if it matches the current index of the item.



# cute-angles.js

**understand**
input
  * floating point number between 0 and 360 degrees
output
  * string representing that angle in degrees, minutes, and seconds
rules
  * function takes a floating point number between 0 and 360
  * returns a string
    * degrees
      * include `º` symbol
    * minutes
      * represented by `'` single quote
    * seconds
      * represented by `"` double quote
  * math:
    * Take in a degree with decimals.
    * the whole number (eg. 30 of 30.156) is the degree
    * the remaining decimal (.156) should be multiplied by 60
      * 0.156 * 60 = 9.36
      * 9 is the minutes
    * the new remainder (0.36) is multiplied by 60 again to get seconds
      * 0.36 * 60 = 21.59 = 21 or 22 depending on rounding

**tests**
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

**data**
input: floating point number
output: string literal
algo: numbers & strings

**algo**

need three variables:
  * degree
  * minutes
  * seconds

Need to get all of this from the input value.

I can get all this way:

  * deg = Math.floor(num)
  * min = (num - deg) * 60
  * sec = (min - Math.floor(min)) * 60

Problem: how to ensure it is always two digits and not just one?
