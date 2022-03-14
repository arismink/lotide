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

module.exports = eqArrays;
