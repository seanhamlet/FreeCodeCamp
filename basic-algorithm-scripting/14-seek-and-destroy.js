/* Basic Algorithm: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer 
function), followed by one or more arguments. Remove all elements from the 
initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Arguments object
Array.prototype.filter()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function destroyer(arr) {
  // Remove all the values
  arr = arguments[0];
  var nums = [];
  for (i = 1; i < arguments.length; i++){
    nums[i - 1] = arguments[i];
  }
  
  // Create filter function
  function isNotNum(val) {
    // if can't find number, return true
    return nums.indexOf(val) === -1;
  }
  
  arr = arr.filter(isNotNum);
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
