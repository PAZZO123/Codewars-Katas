function isPangram(string){
  //...
  let arr='abcdefghijklmnopqrstuvwxyz'.split('')
  return arr.map(n=>string.toLowerCase().includes(n)).every(n=>n)
}
//test cases
console.log(isPangram('abcdefghijklmno'))//false
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))//true