function solution(number){
  //first check if number is less than 0 return 0
  //otherwise loop from zero to the number checking if it is divisible by 3 or5
  //if yes add those number to sum and retrun sum
if(number<0) return 0
  let sum=0
  for(let num=0;num<number;num++){
    if(num%3==0 || num%5===0){
      sum+=num
    }
  }
  return sum
}