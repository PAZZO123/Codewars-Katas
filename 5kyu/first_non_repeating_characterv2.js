function firstNonRepeatingLetter(s) {
  let a=[...s.toLowerCase()]
  return s.charAt(a.indexOf(a.find((n,i)=>a.indexOf(n)===a.lastIndexOf(n))))||''
}
//test cases
console.log(firstNonRepeatingLetter('Justine'))//->J