const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // guard clause
    return false;
  }
  
  for (let x = 0; x < arr1.length; x++) {
    if (Array.isArray(arr1[x]) && Array.isArray(arr2[x])) {
      if (!eqArrays(arr1[x], arr2[x])) {
        return false
      }
    } else if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

assertEqual(eqArrays([[2, 3], [4, 5, 6, [2]], 5], [[2, 3], [4, 5, 6, [2]], 5]), true);