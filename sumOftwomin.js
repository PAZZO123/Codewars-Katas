function sumTwoSmallestNumbers(numbers) {  
  // Code here
 var number=numbers.sort((a,b)=>a-b);
  return number[0]+number[1];
}
console.log(sumTwoSmallestNumbers)