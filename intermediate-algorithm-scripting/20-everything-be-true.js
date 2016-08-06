/* Intermediate Algorithm: Everything Be True

Check if the predicate (second argument) is truthy on all elements of a 
collection (first argument).

Remember, you can access object properties through either dot notation or 
[] notation.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  var isTruthy = [];
  var values = [];
  
  // Loop through and get each value of the pre
  // Check if the value returned by pre is "truthy" by explicitly coercing it
  // Save that value in the array
  for (var i = 0; i < collection.length; i++) {
    isTruthy[i] = Boolean(collection[i][pre]);
  }
  
  function isTrueCheck(value) {
    return value === true;
  }
  return isTruthy.every(isTrueCheck);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
