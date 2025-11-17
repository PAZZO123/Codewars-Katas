// let google = fetch('https://calendar.google.com/calendar/u/0/r/week')
// google.then(result=>console.log("The fetche stuff are:", result)).catch(err=>console.log//("Failed already"))
const promise=new Promise(function (resolve, reject){
    let decider =false
    if(decider){
        resolve(2)
    }
    else {
        reject("False")
    }
});
promise.then(res=>res*2)
.then(res=>res*2)
.then(res=>res*2)
.then(res=>console.log("Interesting the output is ",res))
.catch(err=>console.log('Somethng wrong Happened',err))