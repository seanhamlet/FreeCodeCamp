/* Intermediate Algorithm: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two 
divisors, one and itself. For example, 2 is a prime number because it's only 
divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

For Loops
Array.prototype.push()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function sumPrimes(num) {
  
  // Remember one isn't a prime so start prime check loops at 2
  function isPrime(number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Start prime number sum at 0
  var sum = 0;
  
  // Loop through all numbers up to and including the number
  for (var j = 2; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  
  return sum;
  
}

sumPrimes(10);
