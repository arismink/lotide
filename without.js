// implement a function that will return the subset of a given array, removing unwanted elements
const without = function(words, delWords) {
  let newWords = [];

  for (let char of words) if (!delWords.includes(char)) newWords.push(char);

  return newWords;
}

module.exports = without;