var expandedForm=(num)=>num.toString().split("").reverse().flatMap((n,idx)=>n==='0'?[]:n+"0".repeat(idx)).reverse().join(' + ')

//test