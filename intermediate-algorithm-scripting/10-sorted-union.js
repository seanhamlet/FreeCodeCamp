/* Intermediate Algorithm: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique
 values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their 
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
 should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Arguments object
Array.prototype.reduce()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function uniteUnique(arr1, arr2, arr3) {
  
  // Create array to contain results
  var resultArr = [];
  
  // Loop through arguments and elements within each array
  // Check if element within resulArr, if not add, if so, don't add
  for (var i = 0; i < arguments.length; i++) {
    
    for (var j = 0; j < arguments[i].length; j++) {
      
      if (resultArr.indexOf(arguments[i][j]) === -1) {
          resultArr.push(arguments[i][j]);
      } 
    }
  }
  
  return resultArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
