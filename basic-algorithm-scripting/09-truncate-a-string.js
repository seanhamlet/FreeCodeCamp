/* Basic Algorithm: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.slice()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var trunc;  
  
  if (num <= 3) {
    if (num < str.length){
      return str.slice(0,num) + "...";
    } else{
    trunc = str.slice(0,num);
    return trunc;
    }
  } else if (num >= str.length) {
    return str;
  } else {
    trunc = str.slice(0,num - 3);
    return trunc + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
