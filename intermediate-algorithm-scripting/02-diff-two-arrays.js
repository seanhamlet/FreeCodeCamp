/* Intermediate Algorithm: Diff Two Arrays

We'll pass you an array of two numbers. Return the sum of those two numbers and 
all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Math.max()
Math.min()
Array.prototype.reduce()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function diffArray(arr1, arr2) {
  var diff1 = [];
  var diff2 = [];
  // Same, same; but different.
  
  // Determine if any values in arr2 are in arr1
  diff1 = arr1.filter(function(value) { return arr2.indexOf(value) < 0;});
  
  // Determine if any values in arr1 are in arr2
  diff2 = arr2.filter(function(value) { return arr1.indexOf(value) < 0;});
  
  // Concatenate values not in both arrays 
  return diff1.concat(diff2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
