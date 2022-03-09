// implement a function that will return the subset of a given array, removing unwanted elements

const { eq } = require('lodash');
const emoji = require('node-emoji');
const yes = emoji.get('white_check_mark');
const no = emoji.get('red_circle');

const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false
    };
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

const without = function(words, delWords) {
  let newWords = [];

  for (let char of words) {
    if (!delWords.includes(char)) {
      newWords.push(char);
    }
  }
  return newWords
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// test code
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]