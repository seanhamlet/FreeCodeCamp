/* Basic Algorithm: Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Global String Object

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var rep = [];
  if (num < 0) {
    return "";
  } else {
    for (var i = 0; i < num; i++) {
      rep = rep + str;
    }
  }
  return rep;
}

repeatStringNumTimes("abc", 3);
