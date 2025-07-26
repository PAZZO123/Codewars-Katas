function digPow(n, p){
  var result=n.toString().split('').reduce((acc,el,idx)=>acc+Number(el)**(p+idx),0)/n
  return Number.isInteger(result)?result:-1 
}
//test
console.log(digPow(89,1))