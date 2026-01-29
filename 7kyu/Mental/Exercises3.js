async function fetchWithRetry(url , times){
    for(let time=1; time<=times; time++){
        try{
        let res=await fetch(url)
        if(!res.ok) throw new Error("Bad Result")
        let data=await res.json()
    console.log(data)
    }
    catch(err){
        console.log("Error when Fetching: ", err.message)
        console.log("Retrying ...")
    }
    }
}

fetchWithRetry("https://jsonplaceholdber.typicode.com/todos/1", 3);
