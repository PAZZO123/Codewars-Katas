String.prototype.toAlternatingCase = function () {
  return this.split('').map(n=>n===n.toUpperCase()?n.toLowerCase():n.toUpperCase()).join('')
}
//test 
console.log('Hello Pazzo'.toAlternatingCase())//hELLO pAZZO will be  logged