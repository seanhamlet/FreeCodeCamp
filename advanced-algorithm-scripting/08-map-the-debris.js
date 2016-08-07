/* Advanced Algorithm: Map the Debris

Return a new array that transforms the element's average altitude into their 
orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being 
orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 
398600.4418 km3s-2.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Math.pow()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  var T = 2*Math.PI*Math.sqrt(Math.pow(earthRadius+35873.5553,3)/GM);
  
  for (var i = 0; i < arr.length; i++) {
    T = 2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3)/GM);
    result[i] = {name: arr[i].name, orbitalPeriod: Math.round(T)}; 
  }
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
