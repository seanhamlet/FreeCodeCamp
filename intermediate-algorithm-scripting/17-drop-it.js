/* Intermediate Algorithm: Drop It

Drop the elements of an array (first argument), starting from the front, until 
the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements 
of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.shift()
Array.prototype.slice()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function dropElements(arr, func) {
  // filter out elements that do pass test
  // search for elements in arr that do pass test and remove them from array
  
  // Loop until found element that passes function and array length is > 0
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  
  return arr;
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });
