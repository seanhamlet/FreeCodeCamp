/* Basic Algorithm: Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
String.prototype.split()
Array.prototype.reverse()
Array.prototype.join()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function reverseString(str) {
  str = str.split("");
  str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello");