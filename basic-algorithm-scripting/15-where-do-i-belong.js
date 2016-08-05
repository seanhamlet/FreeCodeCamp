/* Basic Algorithm: Where do I belong

Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. The returned value 
should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater 
than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has 
been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and 
greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  // Create ascending sorting function
  function ascend(a, b) {
    return a - b;
  }
  
  // Sort array by ascending
  arr = arr.sort(ascend);
  
  // If num is less than arr value, then return index location
  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  
  return i;
}

getIndexToIns([2, 5, 10], 15);
