
function isPrime(n) {
  //first check whether n is less than 2 return f
  //if n is greater check if is divisible whit any
  //number less than or equal root n
  for(let i=2;i<=Math.sqrt(n);i++)
    if(n%i===0) return false
  return n>1
}
//test cases
console.log(isPrime(2))
console.log(isPrime(1))
console.log(isPrime(10))
