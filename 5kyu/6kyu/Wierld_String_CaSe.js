const toWeirdCase=(str)=>str.split(' ').map(n=>n.split('').map((l,i)=>i%2===0?l.toUpperCase():l.toLowerCase()).join('')).join(' ')
