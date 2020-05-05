# Template
1. Understand the problem (inputs, outputs, and rules)
2. Set up your test cases
3. What data structures are you using
4. Describe your algorithm
5. Begin coding

---

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
