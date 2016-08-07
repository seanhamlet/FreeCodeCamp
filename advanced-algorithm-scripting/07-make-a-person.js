/* Advanced Algorithm: Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it 
has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Closures
Details of the Object Model

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

var Person = function(firstAndLast) {
    var firstName, lastName, firstAndLastName;
  
    // Get methods
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFullName = function() {
      return firstAndLastName;
    };
  
  
    // Set methods
    this.setFirstName = function(first) {
      firstName = first;
      firstAndLastName = firstName + ' ' + firstAndLastName.split(' ')[1];
    };
  
    this.setLastName = function(last) {
      lastName = last;
      firstAndLastName = firstAndLastName.split(' ')[0] + ' ' + lastName;
    };
  
    this.setFullName = function(firstAndLast) {
      firstAndLastName = firstAndLast;
      firstName = firstAndLastName.split(' ')[0];
      lastName  = firstAndLastName.split(' ')[1];
    };
  
  // Initialize object
    this.setFullName(firstAndLast);
  
};

var bob = new Person('Bob Ross');
bob.getFirstName();
