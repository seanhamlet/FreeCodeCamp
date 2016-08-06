/* Intermediate Algorithm: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.isArray()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  function isArray(element) {
    return Array.isArray(element);
  }
  
  // Concatenating with an empty array produces the same array
  // apply applies concat function to every element of array
  while (arr.some(isArray)) {
    arr = [].concat.apply([],arr);
  }
  
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
