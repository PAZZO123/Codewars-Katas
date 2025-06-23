function filter_list(l) {
  // Return a new array with the strings filtered out
  //filter ou all strings in the array and return new array of only integers
  return l.filter((n)=> typeof n==="number");
}
var list=['tuse',2,2,1,4,'pazzo']
console.log(filter_list(list));