async function fetchWithRetry(url , times){
    for(let time=1; time<=times; time++){
        try{
        let res=await fetch(ur)
        if(!res.ok) throw new Error("Bad Result")
        let data=res.json()
    console.log(data)
    }
    catch(err){
        console.log("Error when Fetching: ", err.message)
        console.log("Retrying ...")
    }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
