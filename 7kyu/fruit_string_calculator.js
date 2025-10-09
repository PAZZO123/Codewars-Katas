function calculate(string) {
  let words=string.split(' ').filter(a=>!Number.isNaN(Number(a)))
  let [a,b]=words
  return string.includes('loses')?+a-(+b):+a+(+b)
}
//test cases
console.log(calculate('48 eggs we loses 8 eggs'))//->40