/* Advanced Algorithm: Symmetric Difference

Create a function that takes two or more arrays and returns an array of the 
symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the 
mathematical term "symmetric difference" of two sets is the set of elements 
which are in either of the two sets, but not in both (A △ B = C = {1, 4}). 
For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets 
but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Array.prototype.reduce()
Symmetric Difference

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function sym(args) {
  
  // Convert args into array of arguments with "slice.call"
  var args = Array.prototype.slice.call(arguments);
  
  // Reduce from left to array doing difference between 2 arrays function
  var arr = args.reduce(diffArray);
  
  function diffArray(arr1,arr2) {
    var diff1 = [];
    var diff2 = [];
    // Same, same; but different.

    // Determine if any values in arr2 are in arr1
    diff1 = arr1.filter(function(value) { return arr2.indexOf(value) < 0;});

    // Determine if any values in arr1 are in arr2
    diff2 = arr2.filter(function(value) { return arr1.indexOf(value) < 0;});

    // Concatenate values not in both arrays and return sorted from least to greatest
    return diff1.concat(diff2).sort(function(a,b) {return a-b;});
  }
  
  // use this function to remove duplicates by checking if found element's position is at curent position
  function unique(elem, pos) {
    return arr.indexOf(elem) === pos;
  }
  
  arr = arr.filter(unique);
  
  return arr;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

