/* Intermediate Algorithm: Arguments Optional

Create a function that sums two arguments together. If only one argument is 
provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should 
return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Closures
Arguments object

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function addTogether(x) {
  
  if (arguments.length === 1) {
    if (!Number.isInteger(x)) {
      return undefined;
    }
    return function (y) {
      if (!Number.isInteger(y)) {
        return undefined;
      }
      return x + y;
    };
  } else {
    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) {
      return undefined;
    }
    return arguments[0] + arguments[1];
  }
  
}

addTogether(2,"3");
