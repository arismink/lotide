// start: 4:04 pm

// FUNCTION IMPLEMENTATION
const emoji = require('node-emoji');
const yes = emoji.get('white_check_mark');
const no = emoji.get('red_circle');

const head = function(array) {
  return array[0];
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${yes}${yes}${yes} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${no}${no}${no} Assertion Failed: ${actual} !=== ${expected}`);
  } 
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
