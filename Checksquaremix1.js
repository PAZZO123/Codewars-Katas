var isSquare = function(n){
  if(n<0){
    //First check if number n is not negative
    //check if number is square of two integers from zero!
    console.log("Negative numbers can not be square of numbers")
    return false
  }
  for(let k = 0;k*k<=n;k++)
    {
      if(k*k===n)
        {
          return true;
        }
         
        
    }
   return false;
 // return false; // fix me
}
//test
var isSqua=n=>Math.sqrt(n)%1===0;
console.log(isSqua(3));