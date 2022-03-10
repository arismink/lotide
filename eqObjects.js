const yes = "✅";
const no = "🔴";

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } else {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        return false
      };
    }
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${yes}${yes}${yes} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${no}${no}${no} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // guard clause
    return false;
  }
  let keysObject1 = Object.keys(object1);

  for (key of keysObject1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const arrayChk = eqArrays(object1[key], object2[key]);

      if (!arrayChk) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cd = { c: ["1", 3], d: [3, 3] };
const dc = { c: ["1", 3], d: [2, 3] };
assertEqual(eqObjects(cd, dc), false); // => false