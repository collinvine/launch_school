// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []

**Understand**

Input
  * string

Ouput
  * all substrings that are palindromes in an array

Rules
  * Take in a string
  * test for palindromes   
    * palindromes are case sensitive
      * civic is, Civic is not
    * palindromes can be within a word
      * "abcddcbA" ==> ['bcddcb', 'cdddc', 'dd']
  * if there's no match, return an empty array
  * if there's blank input, return an empty array
