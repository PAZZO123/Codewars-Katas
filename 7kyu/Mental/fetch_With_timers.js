async function fetchTimer(url, times){
    for(let i=0; i<=times;i++){
    try{
            let res=await fetch(url)
        if(!res.ok) console.log("Fetch Went Wrong")
        let data=await res.json()
        console.log(data)
        return;
    }
    catch(err){
        console.log("Got This Error:" ,err.message)
        console.log('Retrying....')
    }
    }
}
fetchTimer('https://jsonplaceholder.typicode.com/todos/1',3)