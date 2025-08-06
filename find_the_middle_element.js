const gimme = arr => [...arr].indexOf(arr.sort((a,b) => a-b)[1]);

//test cases
console.log(gimme([2,4,3]))//2