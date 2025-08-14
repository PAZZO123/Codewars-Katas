function findOutlier(int){
  let even =int.filter(n=>n%2===0)
  let odd=int.filter(n=>n%2)
  return even.length===1?even[0]:odd.length===1?odd[0]:undefined
  
}
//test cases
console.log(findOutlier([2,6,8,10,3]))//3