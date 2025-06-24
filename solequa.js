function solequa(n) {
  const result = [];

  for (let a = 1; a * a <= n; a++) {
    if (n % a !== 0) continue;

    let b = n / a;
    let x = (a + b) / 2;
    let y = (b - a) / 4;

    if (Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0) {
      result.push([x, y]);
    }
  }

  return result;
}
console.log(solequa(12))