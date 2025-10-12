const sumDigits=(number)=>String(Math.abs(number)).split('').reduce((ac,el)=>ac+(+el),0)
//test cases
console.log(sumDigits('1234'))//->10
console.log(sumDigits('989876'))