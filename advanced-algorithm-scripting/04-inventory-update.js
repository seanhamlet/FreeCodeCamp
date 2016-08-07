/* Advanced Algorithm: Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array 
of a fresh delivery. Update the current existing inventory item quantities 
(in arr1). If an item cannot be found, add the new item and quantity into the 
inventory array. The returned inventory array should be in alphabetical order 
by item.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Global Array Object

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
  
  // check if each item in inventory, if it is, then add new amount to current amount
  // if not, then add to curInv
  
  var ind;
  
  for (var i = 0; i < arr2.length; i++) {
    ind = inInv(arr2[i][1]);
    if (ind === -1) {
      arr1.push(arr2[i]);
    } else {
     arr1[ind][0] += arr2[i][0];
    }
  }
  
  function inInv(element) {
    for (var j = 0; j < arr1.length; j++) {
      if (element === arr1[j][1]) {
        return j;
      }
    }
    return -1;
  }
  
  // sort array in alphabetical order by second dimension
  
  return arr1.sort(function(a, b){
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
