const narcissistic=(value)=>value.toString().split('').reduce((ac,e)=>ac+ (+e)**value.toString().length,0)===value

//test case
console.log(narcissistic(153))//=>true