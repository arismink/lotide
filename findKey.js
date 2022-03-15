const findKey = (object, callback) => {
  for (let o in object) if (callback(object[o])) return o;
}

module.exports = findKey;