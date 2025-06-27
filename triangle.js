function towerBuilder(nFloors) {
  let arr = [];

  for (let i = 0; i < nFloors; i++) {
    let j = " ".repeat(nFloors - i - 1);
    let k= "*".repeat(2 * i + 1);
    arr.push(j + k+ j);
  }

  return arr;
}
