const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.any([myPromise1, myPromise2]).then((results) =>
   console.log(results)//Queen
   
);

//Look if both are rejected
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "error");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Error2");
});

// Settle All
Promise.any([myPromise1, myPromise2]).then((results) =>
   console.log(results)
);//[AggregateError: All promises were rejected] {[errors]: [ 'error', 'Error2' ]}