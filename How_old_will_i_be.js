var  calculateAge=(y1,y2) =>y2>y1?`You are ${y2-y1} year${y2-y1>1?'s':''} old.`:y1===y2?`You were born this very year!`:
`You will be born in ${y1-y2} year${y1-y2>1?'s':''}.`


//test 
console.log(calculateAge(2002,2001))//You are 23 years old.