function Hero() {
  this.x = 0; // row
  this.y = 0; // column
  this.position = "00"; // string representation
}

Hero.prototype.move = function (dir) {
  if (dir === "up") {
    if (this.x === 0) throw new Error("Out of bounds");
    this.x--;
  } else if (dir === "down") {
    if (this.x === 4) throw new Error("Out of bounds");
    this.x++;
  } else if (dir === "left") {
    if (this.y === 0) throw new Error("Out of bounds");
    this.y--;
  } else if (dir === "right") {
    if (this.y === 4) throw new Error("Out of bounds");
    this.y++;
  } else {
    throw new Error("Invalid direction");
  }

  this.position = `${this.x}${this.y}`;
};
//console.log(Hero.prototype.move('down'))
