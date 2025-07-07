
function minMax(arr){
  //var array =[];arr.sort((a,b)=>a-b); array.push(arr[0]);array.push(arr[arr.length-1]);return array;}
  return [Math.min(...arr),Math.max(...arr)]}
  console.log(minMax([1,2,3,4,5,6]))