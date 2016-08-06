/* Intermediate Algorithm: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these
 parameters.

The range will be an array of two numbers that will not necessarily be in 
numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is 
evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Smallest Common Multiple

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function smallestCommons(arr) {

  var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null,arr);
  
  var newArr = [];

  for(var i = min; i <= max; i++) {
    newArr.push(i);
  }
  
  newArr = newArr.sort(function(a,b) {return a-b;});
  
  var SCM = false;
  
  var num = 1;
  
  var isDivisible = [];
  
  // Loop through all integers until find one that is divisible by all numbers in array
  while(!SCM) {
    // Determine divisibility of each number in array
    for (var j = 0; j < newArr.length; j++){
      isDivisible[j] = (num % newArr[j] === 0);
    }
    
    // Check if divisible by all numbers (including) in range
    if (isDivisible.every(function(value) {
      return value === true;
    })){
      return num;
    }
    
    num++;
  }
  
  return newArr;
}


smallestCommons([1,13]);
