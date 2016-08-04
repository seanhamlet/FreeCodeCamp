/* Basic Algorithm: Return Largest Numbers in Array

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Comparison Operators

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  
  for (i = 0; i < arr.length; i++) {
    // Reset largest to be first index from each sub array
    largest[i] = arr[i][0];
    for (j = 1; j < arr[i].length; j++) {
      if (largest[i] < arr[i][j]) {
        largest[i] = arr[i][j];
      }
    }
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
