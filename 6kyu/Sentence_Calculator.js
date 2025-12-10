function lettersToNumbers(s) {
  const valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return [...s]
    .filter(c => valid.includes(c))
    .reduce((sum, c) => {
      if (!isNaN(+c)) return sum + Number(c);              // digits
      if (c === c.toUpperCase()) return sum + 2 * (c.charCodeAt(0) - 64); // uppercase
      return sum + (c.charCodeAt(0) - 96);               // lowercase
    }, 0);
}
console.log(lettersToNumbers("TZPG59Iy5 4"))