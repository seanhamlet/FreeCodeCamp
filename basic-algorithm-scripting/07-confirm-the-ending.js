/* Basic Algorithm: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.substr()
String.prototype.substring()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(str.length - target.length, str.length-1) === target;
}

confirmEnding("Bastian", "n");

