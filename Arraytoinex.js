var number=(array)=> Object.entries(array).map(([key,value])=>[(Number(key)+1)+": "+value]).flat()
var num=(a)=>a.map((i,e)=>`${++e}: ${i}`)
var n=[1,2,3,4]
console.log(num(n))
console.log(number(n))