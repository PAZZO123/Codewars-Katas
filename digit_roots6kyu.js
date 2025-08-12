function digitalRoot(n) {
  //first split given number into its corresponding digits
  //add those digits together just to make sum
  //keep doing the same until sum equal to 1 digit
  //i have to use nested loop
  while(n.toString().length>1){
  let arr=n.toString().split('')
  let sum=0
  for(let i=0; i<arr.length;i++)
    {
    sum+=Number(arr[i])
      n=sum;
    }}
  return n
}