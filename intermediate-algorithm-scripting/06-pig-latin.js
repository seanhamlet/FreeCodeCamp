/* Intermediate Algorithm: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function translatePigLatin(str) {
 
  
  // Determine if character is vowel
  function isVowel(c) {
    return (/[aeiou]/).test(c.toLowerCase());
  }
  
  // If begin with vowel
  if (isVowel(str[0])) {
    // end in "way"
    return str + "way";
  // If begin with consonant
  } else if (!isVowel(str[0])) {
    // end in consonant + ay
    // Determine which beginning letters to move to end
    var k = 1;
    var letter = str[k];
    while (!isVowel(letter)) {
      k++;
      letter = str[k];
    }
    return str.slice(k) + str.slice(0,k) + 'ay';
  }
}

translatePigLatin("glove");
