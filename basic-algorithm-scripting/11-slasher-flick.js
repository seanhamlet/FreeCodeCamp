/* Basic Algorithm: Slasher Flick

Return the remaining elements of an array after chopping off n elements from the
head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Array.prototype.slice()
Array.prototype.splice()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.splice(howMany,arr.length);
  
  return newArr;
}

slasher([1, 2, 3], 2);

