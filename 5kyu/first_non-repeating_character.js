function firstNonRepeatingLetter(s) {
  let arr=s.toLowerCase().split('')
  return s.charAt(arr.indexOf(arr.find((n,i)=>arr.indexOf(n)===arr.lastIndexOf(n))))||''
}
//test cases
console.log(firstNonRepeatingLetter('Totos'))