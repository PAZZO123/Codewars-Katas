var findNextSquare=(sq) =>Number.isInteger(Math.sqrt(sq))?(Math.sqrt(sq)+1)**2:-1
  
  //test
  console.log(findNextSquare(121))