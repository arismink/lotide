const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) results[sentence.charAt(x)] ? results[sentence.charAt(x)].push(x) : results[sentence.charAt(x)] = [x];
  
  delete results[' ']; // not tracking spaces
  return results;
};

module.exports = letterPositions;