var solution=(string)=>string.split('').map(n=>n===n.toUpperCase()?' '+n:n).join('')

//test console
console.log(solution('camelCase'))//camel Case