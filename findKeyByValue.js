const findKeyByValue = function(searchObject, searchValue) {
  for (let key in searchObject) if (searchObject[key] === searchValue) return key;
}

module.exports = findKeyByValue;