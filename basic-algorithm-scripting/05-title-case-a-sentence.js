/* Basic Algorithm: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function titleCase(str) {
  var arr = str.split(" ");
  var first;
  var ends = [];
  var temp;
  var arrFixed = [];
  
  for (i = 0; i < arr.length; i++){
    first = [];
    ends = [];
    for (j = 0; j < arr[i].length; j++){
      if (j === 0){
        // make first letter capital
        first = arr[i][j];
        first = first.toUpperCase();
      } else if (j > 0){
        // make rest of letters lowercase
        temp = arr[i][j];
        ends[j-1] = temp.toLowerCase(); 
      }
    }
    arrFixed[i] = first + ends.join("");
    
  }
  str = arrFixed.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
