const emoji = require('node-emoji');
const yes = emoji.get('white_check_mark');
const no = emoji.get('red_circle');

const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${yes}${yes}${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no}${no}${no} Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true); // => should PASS