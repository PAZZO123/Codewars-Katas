const strCount = (str, letter) => [...str].reduce((count, char) => char === letter ? count + 1 : count, 0);
// test console
console.log(strCount('patrick','t'))//1 time