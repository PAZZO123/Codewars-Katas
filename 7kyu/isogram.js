function isIsogram(str){
  let letters=str.toLowerCase().split('')
  return letters.every(n=>letters.indexOf(n)===letters.lastIndexOf(n))
}
//test cases
console.log(isIsogram('hello brother'))//false