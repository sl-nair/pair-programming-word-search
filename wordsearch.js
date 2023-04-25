const reverseStr = (str) => {
  return str.split('').reverse().join('');
};

const wordSearch = (letters, word) => {
  if (letters.length === 0 || word === "") {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word) || reverseStr(l).includes(word)) {
      return true;
    }
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word) || reverseStr(l).includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

// function receives a 2D array of letters and a word
// The function must:
// check to find the word horizontally and vertically
// return true if the word is found, and return false if the word is not found

const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newArray[j][i] = matrix[i][j];
    }
  }
  return newArray;
};