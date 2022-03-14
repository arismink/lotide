const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArr = [];
  for (let x = 1; x < array.length; x++) {
    newArr.push(array[x]);
  }
  return newArr;
};

module.exports = tail;