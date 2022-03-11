const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};

  console.log(sentence);
  for (let x = 0; x < sentence.length; x++) {
    if (results[sentence.charAt(x)]) {
      results[sentence.charAt(x)].push(x)
    } else {
      results[sentence.charAt(x)] = [x];
    }
    
  }
  delete results[' ']; // not tracking spaces
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);