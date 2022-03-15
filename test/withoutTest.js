const _ = require('../index');

const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
_.assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// test code
console.log(_.without([1, 2, 3], [1])) // => [2, 3]
console.log(_.without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]