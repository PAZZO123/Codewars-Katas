function maxAndMin(arr1,arr2){
  var diff=0
  var result=[]
  for(let el of arr2){
    for(let el2 of arr1){
      
      diff=el-el2;
      result.push(Math.abs(diff))
    }
  }
  return[Math.max(...result),Math.min(...result)]
}
//test cases
console.log(maxAndMin([3,10,5],[20,7,15,8])) //[17,2]