function generatePairs(n) {
  var result = [];
  for(i =0 ; i <= n ; i++){
    for(j = i ; j <= n ; j++){
        result.push([i, j]);
    }
  }
  return result;
}
//test cases
console.log(generatePairs(2))//[[0,0],[0,1],[0,2],[1,1],[1,2].....]