var accum=(s) => s.split('').map((a,idx)=>a.toUpperCase()+a.repeat(idx+1).toLowerCase().slice(1)).join('-')
    
//test