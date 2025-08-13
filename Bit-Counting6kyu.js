
const countBits=(n)=> n.toString(2).split('').reduce((ac,el)=>el==='1'?++ac:ac,0)
//test cases
console.log(countBits(4))//1
