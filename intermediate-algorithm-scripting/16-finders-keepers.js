/* Intermediate Algorithm: Finders Keepers

Create a function that looks through an array (first argument) and returns the 
first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Array.prototype.filter()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function findElement(arr, func) {
  // Use function to filter array when input (array element) results in true output
  var newArr = arr.filter(func);
  return newArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

