function high(str) {
  const words = str.split(" ");
  let highestScore = 0;
  let bestWord = "";

  for (let word of words) {
    let score = 0;
    for (let char of word) {
      // 'a'.charCodeAt(0) === 97
      score += char.charCodeAt(0) - 96;
    }

    if (score > highestScore) {
      highestScore = score;
      bestWord = word;
    }
  }

  return bestWord;
}
//test cases
