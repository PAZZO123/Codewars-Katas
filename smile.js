function countSmileys(arr) {
var valid =[':)',':D',';-D',':~)',';~D',':-)',':-D',';D',";~)",";-)",";)",":~D"]
var count=0
  for(var i=0;i<arr.length;i++){
    if(valid.includes(arr[i])){
      count++
    }
  }
  return count
}
//test console
console.log(countSmileys(['a','b',':D']))//1