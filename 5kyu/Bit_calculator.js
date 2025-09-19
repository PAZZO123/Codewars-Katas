function calculate(num1, num2) {
  //convert each string representation to An array
  //reverse an array to power index to 2
  //map reversed array and map each element by X2**index and then reduce to get sum
  //Add and return the result of two numbers
  const toDecimal=(num)=>num.split('').reverse().map((n,i)=>+n*2**i).reduce((acc,el)=>acc+el,0)
    return toDecimal(num1)+toDecimal(num2)
}
//test cases
console.log(calculate('10','10'))//->4