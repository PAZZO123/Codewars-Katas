const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "success");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Error2");
});

// race 
Promise.race([myPromise1, myPromise2])
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));//->Rejected Error2