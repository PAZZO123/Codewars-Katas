//const { useCallback } = require("react");

/*

Write a JavaScript program that converts this callback-based function to a promise-based function.


*/
function fetchData(callback) {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      callback(null, data);
    }, 1000);
  }
  
  fetchData((error, data) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log(data);
    }
  });
  
function fetchDataPromise(){
    return new Promise((resolve,reject)=>{
        fetchData((error,data)=>{
          if(error) reject(error)
            else resolve(data)
        })
        });
   
}
fetchDataPromise().then(res=>console.log(res))
.catch(err=>console.log(err))