const strCount = (str, letter) => [...str].reduce((count, char) => char === letter ? count + 1 : count, 0);
// test console
console.log(strCount('pattrick','t'))//2 times