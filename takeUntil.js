const takeUntil = function(array, callback) {
  results = [];
  for (let item of array) {
    if (callback(item)) return results;
    results.push(item)
  }
};

module.exports = takeUntil;