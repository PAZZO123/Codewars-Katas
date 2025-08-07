function persistence(num) {
   //access each digit by converting number to strin
  //check wher the result of multiplication is also mor than one digit
  //to calculate persistance 6kyu
  
  
   
    var count=0;
    while(num>=10){
       var multiply=1;
      var number=num.toString();
  
    for( let digit of number){
      multiply*=Number(digit);
      
    
    }   
        num=multiply;
   count++;
  }
  return count;}
  console.log(persistence(39))