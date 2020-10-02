# 2. Triangle Sides

**understand**














# 1. Lettercase Percentage Ratio

**understand**
input: string
output: object containing:
  * % of chars that are lowercase letters
  * % of chars that are uppercase letters
  * % of chars that are neither
rules:
  * string will always have at least one char
  * two decimal places


**algo**
split string
for each char, check:
  * is letter?
    * if yes, is uppercase?
      * if yes, increment `uppercase`
      * if no, increment `lowercase`
    * if no, increment `neither`

How to check for letter?
  regex: `/[A-Z]/g` or `/[a-z]/g`

How to check for case? 
  (see above)

How to convert to percent?
  amt / total * 100

How to get to 2 decimal places?
  .toFixed()