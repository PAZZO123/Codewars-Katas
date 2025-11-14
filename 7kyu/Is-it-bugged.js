function isItBugged(code) {
  let [d, t] = code.split(' ');

  if (!d || !t) return false;
  let date = d.split("-");
  if (date.length !== 3 || date.some(part => part.length < 2)|| +date[2]<1000 || date[1].length>2 ) return false;
  let time = t.split(":");
  if (time.length !== 2 || time.some(part => part.length < 2)) return false;

  return true;
}
//test cases
console.log(isItBugged("17-28-2024  04:34"))//->true
console.log(isItBugged("17-28-2024  04:34"))//->false