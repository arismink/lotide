const countLetters = function(sentence) {
  let results = {};
  let newSentence = sentence.replace(/\s/g, ''); // remove spaces

  for (letter of newSentence) {
    if (results[letter]) {
      results[letter] += 1
    } else {
      results[letter] = 1
    }
  }
  return results;
}

module.exports = countLetters;
