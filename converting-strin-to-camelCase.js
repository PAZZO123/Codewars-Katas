let toCamelCase=(s)=>s.split('_').join(' ').split('-').join(' ').split(' ').map((n,i)=>i===0?n:
n.charAt(0).toUpperCase()+n.slice(1)).join('')
//test cases
console.log(toCamelCase('camel-case'))//camelCase


