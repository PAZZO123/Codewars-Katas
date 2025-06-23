function positiveSum(arr) {
  //Accept the array
  //filter all postive values in the array
  //sum the ramaining postive element and return sum
  return arr.filter((n)=>n>=0).reduce((sum,n)=>sum+n,0);
  
}
var nums=[1,2,3,4,-5];
console.log(positiveSum(nums));