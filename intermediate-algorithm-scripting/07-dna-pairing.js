/* Intermediate Algorithm: DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its 
pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided 
character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are 
grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function pairElement(str) {
  
  // A pairs with T, T pairs with A
  // G pairs with C, C pairs with G
  
  var pairs = [];
  str = str.split('');
  
  
  for (var i = 0; i < str.length; i++) {
    pairs[i] = [str[i],findPair(str[i])];  
  } 
  
  function findPair(strand) {
    switch(strand) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'G':
        return 'C';
      case 'C':
        return 'G';
    }
  }
  
  return pairs;
}

pairElement("GCG");
