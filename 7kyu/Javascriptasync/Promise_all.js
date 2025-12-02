const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.all([myPromise1, myPromise2]).then((results) =>
   console.log(results)//->[ 'King', 'Queen' ]
);