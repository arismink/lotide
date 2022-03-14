const middle = function(numArray) {
  let numLength = numArray.length;
  let answer = [];
  let midInd = Math.floor(numLength / 2)

  if (numLength > 2) {
    if (numLength % 2 !== 0) {
      answer.push(numArray[midInd])
    } else {
      for (let x = (midInd - 1); x <= midInd; x++) {
        answer.push(numArray[x])
      }
    }
  } 
  return answer
}

module.exports = middle;