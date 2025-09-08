
function maskify(cc) {
  if(cc.length<=4)return cc
return cc.slice(0,cc.length-4).split('').map(n=>'#').join('')+cc.slice(cc.length-4)
}
//test cases
console.log(maskify('Tetcases'))