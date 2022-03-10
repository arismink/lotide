// 4:45pm
// 5:20pm

const yes = "✅";
const no = "🔴";

const eqArrays = function(arr1, arr2) {
  for (let x = 1; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false
    };
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${yes}${yes}${yes} Assertion Passed:`, actual, `=== `, expected);
  } else {
    console.log(`${no}${no}${no} Assertion Failed:`, actual, `!== `, expected);
  }
};

// function returns array of middle element

const middle = function(numArray) {
  let numLength = numArray.length;
  let answer = [];
  let midInd = Math.floor(numLength / 2)

  if (numLength > 2) {
    if (numLength % 2 !== 0) {
      answer.push(numArray[midInd])
    } else {
      for (let x = (midInd - 1); x <= midInd; x++) {
        answer.push(numArray[x])
      }
    }
  } else {
    return answer
  }
  return answer
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), [] );
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4] );