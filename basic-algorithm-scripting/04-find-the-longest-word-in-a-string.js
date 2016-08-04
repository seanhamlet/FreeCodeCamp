/* Basic Algorithm: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.split()
String.length

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function findLongestWord(str) {
  var arr = str.split(" ");
  var largest = arr[0].length;
  var ind = 0;
  
  for (i = 0; i < arr.length; i++){
    if (largest < arr[i].length) {
      largest = arr[i].length;
      ind = i;
    }
  }
  
  return arr[ind].length;
}

findLongestWord("May the force be with you");