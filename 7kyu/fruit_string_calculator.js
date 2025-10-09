function calculate(string) {
  let words=string.split(' ').filter(a=>!Number.isNaN(Number(a)))
  let [a,b]=words
  return string.includes('loses')?+a-(+b):+a+(+b)
}