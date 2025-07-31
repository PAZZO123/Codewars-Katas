function longestSlideDown(pyramid) {
  
  let temp = pyramid.map(row => row.slice());

  
  for (let row = temp.length - 2; row >= 0; row--) {
    for (let col = 0; col < temp[row].length; col++) {
      
      temp[row][col] += Math.max(temp[row + 1][col], temp[row + 1][col + 1]);
    }
  }
  return temp[0][0];
}
//plamid??
console.log(longestSlideDown([[2],[3,4]]))
