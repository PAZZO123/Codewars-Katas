async function fetchData(){
    try{
        let data=await fetch('https://dummyurl')
    let jasonValue=data.json()
    console.log(data)
    }
    catch(err){
        console.error(err.message)
    }
}
fetchData()