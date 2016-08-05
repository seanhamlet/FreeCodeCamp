/* Intermediate Algorithm: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function convertToRoman(num) {
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 
  var romanNum = '';
  
  for (var j = 0; j < decimals.length; j++) {
    
    while(decimals[j] <= num) {
      romanNum += romanNumerals[j];
      num -= decimals[j];
    }
  }
  
  return romanNum;
  
}

convertToRoman(36);
