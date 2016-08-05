/* Basic Algorithm: Mutations

Return true if the string in the first element of the array contains all of the 
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters 
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" 
does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in 
"line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.indexOf()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function mutation(arr) {
  var newArr = [];
  
  // Make both words in array lowercase
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].toLowerCase();
  }
  
  arr = newArr;
  var inWord = [];
  
  // Loop through second word's letters and check if in first word
  for (i = 0; i < arr[1].length; i++) {
    inWord[i] = arr[0].indexOf(arr[1][i],0);
    
    if (inWord[i] === -1) {
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "Hey"]);
