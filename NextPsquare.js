var findNextSquare=(sq) =>Number.isInteger(Math.sqrt(sq))?(Math.sqrt(sq)+1)**2:-1
  
  //test in console
  console.log(findNextSquare(121))