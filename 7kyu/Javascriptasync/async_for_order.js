const p1=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise Resolved Value')
    },10000)
})
async function getData(){
    const data=await p1 
    console.log('Value1')
    console.log(data)
      console.log('Value2')
        const data2=await p1 
         console.log(data2)
}
async function Data(){
   const data =Promise.resolve('Patrick straton') 
   console.log(data)
}

let data=getData()

console.log(data)
let data1=Data()
console.log(data1)
//output
// Promise { <pending> }
// Promise { 'Patrick straton' }
// Promise { undefined }
// Value1
// Promise Resolved Value
// Value2
// Promise Resolved Value