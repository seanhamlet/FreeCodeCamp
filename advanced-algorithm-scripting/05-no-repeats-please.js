/* Advanced Algorithm: No Repeats Please

Return the number of total permutations of the provided string that don't have 
repeated consecutive letters. Assume that all characters in the provided string 
are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, 
aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter
 (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Permutations
RegExp

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/


function permAlone(str) {
  
  // RegExp for repeated letters
  var re = /(.)\1{1,}/;
  
  // Split string into array
  var arr = str.split('');
  var perms = [];
  
  // Swap function used in Heap's algorithm
  function swap(ind1, ind2) {
    var temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
  }
  
  // Generate permutations function using Heap's algorithm
  function generate(n) {
    if (n === 1) {
      perms.push(arr.join(''));
    } else {
      for (var i = 0; i < n - 1; i++) {
        generate(n - 1);
        if (n % 2 === 0) {
          swap(i,n-1);
        } else {
          swap(0,n-1);
        }
      }
      generate(n-1);
    }
  }
  
  // Generate permutations
  generate(arr.length);
  
  // Filter function to filter out repeats
  function hasRepeat(theStr) {
    return !theStr.match(re);
  }
  
  // Return length of non-repeated strings from array
  return perms.filter(hasRepeat).length;
}

permAlone('aab');
