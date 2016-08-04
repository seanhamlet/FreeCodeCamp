/* Basic Algorithm: Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.replace()
String.prototype.toLowerCase()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function palindrome(str) {
  // Good luck!
  // First, remove all non-alphanumeric characters (i.e. punctuation, spaces, and symbols)
  // Remove spaces
  str = str.replace(" ", "");
  // Make lowercase
  str = str.toLowerCase();
  // Remove all punctuation (except for underscore ("_"))
  str = str.replace(/\W/g, "");
  // Remove underscores
  str = str.replace("_", "");
  
  // if str length is even 
  if (str.length % 2 === 0) {
    // Remember arrays start at zero
    // slice method makes array that ends one element before given end argument 
    front = str.slice(0, Math.floor(str.length / 2));
    back  = str.slice(Math.floor(str.length / 2), str.length);
  } else if (str.length % 2 === 1) {
  
    // Remember arrays start at zero
    // slice method makes array that ends one element before given end argument 
    front = str.slice(0, Math.floor(str.length / 2));
    back  = str.slice(Math.floor(str.length / 2) + 1, str.length);
  }
    // Split back, reverse it, and put it back together
    // If (at that point), back equals front (===), then we have a pallindrome
    back  = back.split("");
    back = back.reverse();
    back = back.join("");
    return back === front

}

palindrome("eye");
