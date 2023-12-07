/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().split('').filter(e => e >= 'a' && e <= 'z').join('')
  let s1 = str
  s1 = s1.split('').reverse().join('')

  return s1 == str
}

module.exports = isPalindrome;
