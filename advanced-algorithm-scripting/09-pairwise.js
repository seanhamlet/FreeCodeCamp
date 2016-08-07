/* Advanced Algorithm: Pairwise

Given an array arr, find element pairs whose sum equal the second argument 
arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different
 indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 
20 are [7, 13] and [9, 11]. We can then write out the array with their indices 
and values.

Index	0	1	2	3	4
Value	7	9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.reduce()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/


function pairwise(arr, arg) {
  
  // for each element in array, loop through and check every other element sum
  // if sum == argument, then add indices to another array
  
  var inds = [];
  for (var i = 0; i < arr.length; i++) {
    
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        // make sure i or j indice is not already part of array
        if (checkInd(i) && checkInd(j) && i != j) {
          inds.push([i,j]);
        }
      }
    }
  }
  
  function isArray(element) {
    return Array.isArray(element);
  }
  
  function checkInd(indice) {
    // flatten inds array
    var indsFlat = inds;
    while (indsFlat.some(isArray)) {
      indsFlat = [].concat.apply([],indsFlat);
    }
    return indsFlat.indexOf(indice) === -1;
  }
  
  
  // loop through elements of inds array and sum them up.
  
  while (inds.some(isArray)) {
    inds = [].concat.apply([],inds);
  }
  
  if (inds.length === 0) {
    return 0;
  }
  
  var sum = inds.reduce(function(a,b) {
    return a+b;
  });
  
  // look for repeated indices. if found thrm, then remove from ind array
  return sum;
}

pairwise([], 100);
