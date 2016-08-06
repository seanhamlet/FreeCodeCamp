/* Intermediate Algorithm: Spinal Tap Case

Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

RegExp
String.prototype.replace()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // Make all phrases: [word] + [space] + [word]
  // Do this by looking for all lower to upper and replacing with lower space upper
  
  // $1 corresponds to found ([a-z])
  // $2 corresponds to found ([A-Z])
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Replace all spaces and underscores with hyphens
  str = str.replace(/\s+|_+/g,'-').toLowerCase();
  
  return str;
  
}

spinalCase('AllThe-small Things');
