/* Intermediate Algorithm: Missing Letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.charCodeAt()
String.fromCharCode()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function fearNotLetter(str) {
  
  // Find start character of string in unicode
  var start = str.charCodeAt(0);
  
  // Check each letter of string
  // if each next letter is not the same as the next letter in unicode,
  // then return that letter in unicode
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== String.fromCharCode(start + i)) {
      return String.fromCharCode(start + i);
    }
  }
  
  return undefined;
}

fearNotLetter("abce");
