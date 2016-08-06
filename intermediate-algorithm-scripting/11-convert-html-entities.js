/* Intermediate Algorithm: Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a 
string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

RegExp
HTML Entities
String.prototype.replace()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function convertHTML(str) {
  
  // Create regexp pairs to html entities
  var re = [/&/g, /</g, />/g, /"/g, /'/g];
  var html = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
  
  // Loop through each regexp and replace with html entity
  for (var i = 0; i < str.length; i++) {
    str = str.replace(re[i],html[i]);
  }
  
  return str;
}

convertHTML("Dolce & Gabbana");
