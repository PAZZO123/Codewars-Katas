function sumDigPow(a, b) {
  var sumdig=[]
  for(var num=a; num<=b; num++){
    var nums=String(num);
    var digits=nums.split('')
    var sum=0
    for(var i=0;i<digits.length;i++){
      sum+=Number(digits[i]**(i+1))
      if(num ===sum){
        sumdig.push(num)
      }
    }
  }
  return sumdig; //6 kyu
}
