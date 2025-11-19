function getJSON(url){
    return fetch(url)//fetch will not be defined here so you have to import all run it in programiz
}

getJSON("data1.json")
  .then((res1) => {
   console.log(res1)
  })
  .catch((err) => {
    console.log("Caught inside!", err.message);
    return getJSON("data2.json"); 
  })
  .then((res2) => console.log("Recovered:", res2))
  .catch((err) => console.log("Final error:", err.message)); 
