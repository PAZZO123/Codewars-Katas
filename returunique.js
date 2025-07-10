var findUniq=(arr) =>arr.find(n=>arr.indexOf(n)===arr.lastIndexOf(n))
  var noduplicate=[...new Set(arr)]
  //return arr.find((item, index) => arr.indexOf(item) === index)