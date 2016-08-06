/* Intermediate Algorithm: Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Boolean Objects

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';
}

booWho(true);
