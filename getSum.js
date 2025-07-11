function getSum(a, b)
{
   var sum=0;
   //Good luck!
  //check two numbers if they are equal return one of them
  //if they are not equal return sum of integers between them
  if(a===b){
    return a;
  }
  else if(a<b){
 
  for(let i=a;i<=b;i++){
    sum+=i;
  }}
  else{
    for(let i=a;i>=b;i--){
      sum+=i;
    }
  }
  return sum;
}
console.log(getSum(0,1))