/* Basic Algorithm: Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Arithmetic Operators on MDN

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function factorialize(num) {
  fact = 1;
  posInt = num;
  for (i = 0; i < num; i++){
    fact *= posInt;
    posInt -= 1;
  }
  return fact;
}

factorialize(5);