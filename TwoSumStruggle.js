function twoSum(numbers, target) {
    var i=0
    while(i<numbers.length){
      for(let j=0;j<numbers.length;j++){
        if(Number(numbers[i])+Number(numbers[j])===target && i!==j){
         return[i,j]
        }
      }
      i++
    }

}
// test cases
console.log(twoSum([1, 2, 3, 4, 5],5)  );