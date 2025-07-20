var onlyDuplicates=(str)=>str.split('').map(n=>str.indexOf(n)!==str.lastIndexOf(n)?n:'').join('')
//test console
console.log(onlyDuplicates('aaabimmmiiin'))//aaaimmmiii