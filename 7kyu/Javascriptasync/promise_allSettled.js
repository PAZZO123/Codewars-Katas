const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
    //test
   console.log(results)//->[ { status: 'fulfilled', value: 'King' },{ status: 'fulfilled', value: 'Queen' }]
);