const sumStrings=(a,b)=>(BigInt(a)+BigInt(b)).toString()
//test cases
console.log(sumStrings('2','4'))//6
console.log(sumStrings(2200000000000000,'4'))//2200000000000004