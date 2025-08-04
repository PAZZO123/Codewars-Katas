const isTriangle =(a,b,c)=>a+b>c&&b+c>a&&c+a>b

//test cases
console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(5, 5, 5)); // true
console.log(isTriangle(0, 0, 0)); // false
