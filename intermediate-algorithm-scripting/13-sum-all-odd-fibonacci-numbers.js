/* Intermediate Algorithm: Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that 
are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
number in the sequence is the sum of the two previous numbers. The first six 
numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Remainder

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function sumFibs(num) {
  // first figure out fibonacci numbers
  // then 
  // check if odd, if so, then add to sum
  var prevNum = 0;
  var currentNum = 1;
  var fib = 0;
  var sum = 0;
  
  while (currentNum <= num) {
    if (currentNum % 2 === 1) {
      sum += currentNum;
    }
    
    fib = currentNum + prevNum;
    prevNum = currentNum;
    currentNum = fib;
    
  }
  return sum;
}

sumFibs(75025);
