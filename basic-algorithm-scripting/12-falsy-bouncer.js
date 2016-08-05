/* Basic Algorithm: Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Boolean Objects
Array.prototype.filter()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  // Create isFalsy function to filter array
  // Returns false if falsy, returns true if not falsy
  function isNotFalsy(val) {
    var x = Boolean(val);
    return x;
  }
  
  
  return arr.filter(isNotFalsy);
}

bouncer([null, false, 0, NaN, undefined, ""]);
