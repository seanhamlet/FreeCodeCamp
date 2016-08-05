/* Intermediate Algorithm: Sum All Numbers in a Range

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

function sumAll(arr) {
  
  var max = Math.max.apply(null,arr);
  // This about equal to Math.max(arr[0],arr[1])
  var min = Math.min.apply(null,arr);
  // This about equal to Math.min(arr[0],arr[1])
  
  var sum = 0;
  
  var arr2 = [];
  
  for (var i = min; i <= max; i ++) {
    sum += i;
    arr2.push(i);
  }
  
  var sum2 = arr2.reduce(function(currentValue, previousValue) {
    return currentValue + previousValue;
  });
  
  return sum2;
}

sumAll([5, 10]);
