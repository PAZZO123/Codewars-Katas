var roundToNext5=(n)=>n===0?0:n%5===0?n:Math.ceil(n/5)*5

//test
console.log(roundToNext5(1))//round to nearest 5