var weRateDogs=(str, rating)=>str.slice(0,str.indexOf('/')-1)+""+rating.toString()+str.slice(str.indexOf('/'))
 
//test
console.log(weRateDogs('This is Tucker. He would like a hug. 3/10 someone hug him', 11))