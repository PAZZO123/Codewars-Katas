function toBcd(n){
  return( n>=0? n.toString().split('').map(n=>Number(n).toString(2).padStart(4,'0')).join(' '): 
         "-"+Math.abs(n).toString().split('').map(n=>Number(n).toString(2).padStart(4,'0')).join(' '))
}
//test cases
console.log(toBcd(10))//"0001 0000"
console.log(toBcd(-10))//"-0001 0000"