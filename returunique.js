var findUniq=(arr) =>arr.find(n=>arr.indexOf(n)===arr.lastIndexOf(n))
  var noduplicate=[...new Set(arr)]
  //return arr.filter((item, index) => arr.indexOf(item) === index)
  //test
  console.log(findUniq([1,1,2,3,3,2,2,2,1,3]))