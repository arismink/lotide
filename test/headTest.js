const assertEqual = require('../assertEqual');
const head = require('../head');

// head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head([], 3));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");