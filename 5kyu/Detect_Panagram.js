function isPangram(string){
  //...
  let arr='abcdefghijklmnopqrstuvwxyz'.split('')
  return arr.map(n=>string.toLowerCase().includes(n)).every(n=>n)
}
//test cases