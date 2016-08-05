/* Basic Algorithm: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

Array.prototype.push()
Array.prototype.slice()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  i = 0;
  while (arr.length > size) {
    // grab first "size" elements from array
    newArr[i] = arr.slice(0,size);
    // remove first "size" elements from array
    for (j = 0; j < size; j++) {
      arr.shift();
    }
    i += 1;
  }
  newArr[i] = arr;
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
