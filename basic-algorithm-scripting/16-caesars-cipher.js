/* Basic Algorithm: Caesar Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known 
as a shift cipher. In a shift cipher the meanings of the letters are shifted by 
some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are 
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a 
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.charCodeAt()
String.fromCharCode()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function rot13(str) { // LBH QVQ VG!
  
  // if a letter (within range of specific UNICODE)
  // then rotate letter location in UNICODE by "13" in unicode

  // A to Z is UNICODE 65 to 90
  // need to do circular rotate from 65 to 90
  // meaning if I get to 90 and add 13 it goes back around
  // thus if I get over the half way point (65+13) you should start substracting

  
  var strDeciphered = "";
  for (i = 0; i < str.length; i++) {
    // if not within 65 to 90, then do nothing
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      strDeciphered = strDeciphered + str[i];
      // if less than halfway through alphabet, add 13
    } else if (str.charCodeAt(i) < 65 + 13) {
      // add 13 to number and return it
      strDeciphered = strDeciphered + String.fromCharCode(str.charCodeAt(i) + 13);
      // if greater than halfway through alphabet, subtract 13
    } else if (str.charCodeAt(i) >= 65 + 13) {
      // subtract 13 from number and return it
      strDeciphered = strDeciphered + String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  
  return strDeciphered;
}

// Change the inputs below to test
rot13("NSERR PBQR PNZC");
