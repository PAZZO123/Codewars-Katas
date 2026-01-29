const promises = [
Promise.reject(new Error('failure #1')),
Promise.reject(new Error('failure #2')),
Promise.reject(new Error('failure #3'))
];
Promise.any(promises).then(
(result) => {console.log(result)},
(error) => {console.log([...error.errors])}
)