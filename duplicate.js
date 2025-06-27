var uniqueInOrder = function(iterable) {
  var result = [];
  var prev = undefined;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== prev) {
      result.push(iterable[i]);
      prev = iterable[i];
    }
  }

  return result;
};

//return sum
var summation = function (num) {
  var sum=0;
  for(let i=0;i<=num;i++){
    sum+=i;
  }
  return sum;
}
