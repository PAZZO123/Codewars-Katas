function findInArray(array, iterator) {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      return i;
    }
  }
  return -1;
}
//test cases
var trueIfEven = function(value, index) { return (value % 2 === 0) };
console.log(findInArray([1,3,4,5,6,7,8],trueIfEven))//