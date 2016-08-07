/* Advanced Algorithm: Exact Change

Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument 
(cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the 
change due. Return the string "Closed" if cash-in-drawer is equal to the 
change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Global Object

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function checkCashRegister(price, cash, cid) {
  
  // Make change object
  var change = {};
  
  // Create denomination array for loops
  var denom = [["PENNY", 0.01],
			   ["NICKEL", 0.05],
			   ["DIME", 0.10],
			   ["QUARTER", 0.25],
			   ["ONE", 1.00],
			   ["FIVE", 5.00],
			   ["TEN", 10.00],
			   ["TWENTY", 20.00],
			   ["ONE HUNDRED", 100.00]].reverse();
  
  // Make cash in drawer object into object
  var drawer = {};
  
  for (var j = 0; j < cid.length; j++) {
    drawer[cid[j][0]] = cid[j][1];
  }
  
  // Compute change due
  var changeDue = cash - price;
  
  // Calculate drawer total
  var drawerTotal = 0;
  
  for (var i = 0; i < cid.length; i++) {
    drawerTotal += cid[i][1];
  }
  
  // If change due is greater than drawer total, return "Insufficient Funds"
  if (changeDue > drawerTotal) {
    return 'Insufficient Funds';
  }
  
  // If change due is equal to drawer total, return "Closed"
  if (changeDue === drawerTotal) {
    return 'Closed';
  }
   
  // Make denomination object with hundred: 100.00
    
  // Loop through each denomination, 
  // while each denomination is less than total, add it to change object and subtract from drawer
  
  for (var k = 0; k < denom.length; k++) {
    
    while (denom[k][1] <= changeDue.toFixed(2)) {
      // Check if have enough in cash register, if not, move to next denom
      if (drawer[denom[k][0]] <= 0) {
        break;
      }
      
      // Add denom to change array
      if (change.hasOwnProperty(denom[k][0])) {
        // If already has denom, add to total
          change[denom[k][0]] += denom[k][1];
      } else {
        // Else if doesn't have denom, then create denom in change object
        change[denom[k][0]] = denom[k][1];
      }
      drawer[denom[k][0]] -= denom[k][1];
      changeDue -= denom[k][1];
    }
  }
  
  
  // Create change array to return
  var changeArr = [];
  var changeKeys = Object.keys(change);
  var changeArrTotal = 0;
  
  for (var l = 0; l < changeKeys.length; l++) {
    changeArr[l] = [changeKeys[l], change[changeKeys[l]]];
    changeArrTotal += change[changeKeys[l]];
  }
  
  // Make sure drawer bills could handle change due
  if (changeArrTotal < changeDue) {
    return 'Insufficient Funds';
  }
  
  // Here is your change, ma'am. (use toFixed(2) to keep decimal places normal at end)
  return changeArr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
