/*
  TASK:

  create a function that will take an array containing elements, including nested arrays of elements, and return a 'flattened' version of the array.

*/

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${yes}${yes}${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no}${no}${no} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const flatten = function(arr) {
  let newArr = [];
  arr.forEach(function(char) {
    if (!Array.isArray(char)) {
      newArr.push(char);
    } else {
      for (let insideChar of char) {
        newArr.push(insideChar);
      }
    }
  });
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4, 6], 5, [6]]), [1, 2, 3, 4, 6, 5, 6]);