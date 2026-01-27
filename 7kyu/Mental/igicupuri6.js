/*
Create a counter function that counts from 1 to 5, with a 1-second delay between each number.
 The function should return a promise that resolves with an array of all the numbers when counting is complete.
  This tests your ability to create async flows with timing and collect results over time.
Requirements:
Function asyncCounter() counts 1, 2, 3, 4, 5
1-second delay between each number
Return promise that resolves with [1, 2, 3, 4, 5]
Use async/await or promise chaining


*/
function counter(){
    return new Promise(function(resolve, reject){
        let array=[]
        let counter=1
        let interval=setInterval(function(){
            array.push(counter)
            if(counter===5){
           clearInterval(interval);
           resolve(array)
            }
         counter++
        },1000)
        
    })
}
counter().then(res=>console.log(res))