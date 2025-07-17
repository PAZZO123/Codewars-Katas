var accum=(s) => s.split('').map((a,idx)=>a.toUpperCase()+a.repeat(idx+1).toLowerCase().slice(1)).join('-')
    
//test console
console.log(accum('PATRICK'))//P-Aa-Ttt-Rrrr-Iiiii-Cccccc-Kkkkkkk will be logged in  console