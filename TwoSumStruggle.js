function twoSum(numbers, target) {
    var result=[]
  
    var i=0
    while(i<numbers.length){
      for(let j=0;j<numbers.length;j++){
        if(Number(numbers[i])+Number(numbers[j])===target && i!==j){
          result.push(i)
          result.push(j)
        }
      }
      i++
    }
  return result.slice(0,2);
}