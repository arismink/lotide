// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { // guard clause
    return false;
  }
  let keysObject1 = Object.keys(object1);

  for (key of keysObject1) {
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false
      } else {
        return true;
      }
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
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

module.export = eqObjects;
