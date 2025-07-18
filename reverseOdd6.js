var reverse=(str)=>str.split(' ').map((n,idx)=>idx%2?n.split('').reverse().join(''):n).join(' ').trim()
//test