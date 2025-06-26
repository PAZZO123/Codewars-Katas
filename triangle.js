function towerBuilder(nFloors) {
  let arr = [];

  for (let i = 0; i < nFloors; i++) {
    let spaces = " ".repeat(nFloors - i - 1);
    let stars = "*".repeat(2 * i + 1);
    arr.push(spaces + stars + spaces);
  }

  return arr;
}
