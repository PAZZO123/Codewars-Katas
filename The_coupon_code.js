const checkCoupon=(eCode, cCode, cDate, eDate)=>eCode===cCode && Date.parse(cDate)<=Date.parse(eDate)

//test
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))//true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))//false