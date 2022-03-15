const flatten = function(arr) {
  let newArr = [];
  arr.forEach(char => {
    if (!Array.isArray(char)) {
      newArr.push(char);
    } else {
      for (let insideChar of char) {
        newArr.push(insideChar);
      }
    }
  });
  return newArr;
};

module.exports = flatten;