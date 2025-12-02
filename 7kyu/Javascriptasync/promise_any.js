const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Any in action 
Promise.any([myPromise1, myPromise2]).then((results) =>
   console.log(results)//Queen
   
);

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "error");
});

const myPromise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Error2");
});

// check if there is any one that has fulfuled or not
Promise.any([myPromise3, myPromise4]).then((results) =>
   console.log(results)
);//[AggregateError: All promises were rejected] {[errors]: [ 'error', 'Error2' ]}