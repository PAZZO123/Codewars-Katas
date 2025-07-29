function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   if (enteredCode !== correctCode) return false;
  const c=currentDate.split(',').join('').split(' ')
   const e=expirationDate.split(',').join('').split(' ')
  //console.log(currentDates)
   if(Number(c[2])>Number(e[2])){ return false}
  
  else if(Number(c[2])===Number(e[2])){
        if(month.indexOf(c[0])>month.indexOf(e[0])) return false
         else if(month.indexOf(c[0])===month.indexOf(e[0])) {
              if(Number(c[1])>Number(e[1])){return false}
    
               return true
            
              }
    else{
      return true
    }
      
      }
  else{
    return true
  }
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))