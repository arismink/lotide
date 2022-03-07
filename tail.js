// start 4:27pm

const emoji = require('node-emoji');
const yes = emoji.get('white_check_mark');
const no = emoji.get('red_circle');


const tail = function(array) {
  let newArr = [];
  for (let x = 1; x < array.length; x++) {
    newArr.push(array[x]);
  }
  return newArr;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${yes}${yes}${yes} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${no}${no}${no} Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!