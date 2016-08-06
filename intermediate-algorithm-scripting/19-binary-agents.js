/* Intermediate Algorithm: Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.charCodeAt()
String.fromCharCode()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function binaryAgent(str) {
  
  var arr = str.split(" ");
  var arrInt = [];
  for (var j = 0; j < arr.length; j++) {
    arrInt.push(String.fromCharCode(parseInt(arr[j],2)));
  }
  
  return arrInt.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
