var number=(array)=> Object.entries(array).map(([key,value])=>[(Number(key)+1)+": "+value]).flat()
var num=(a)=>a.map((i,e)=>`${++e}: ${i}`)
var n=[1,2,3,4]
console.log(num(n))
console.log(number(n))
//multiply the array
function countBy(x, n) {
  var z = [];

  for(let i=x;i<=x*n;i+=x){
    z.push(i)
        }
  return z;
}
//rent a car
function rentalCarCost(d) {
  var result=d<3?d*40:d>=3&&d<7?(d*40)-20:(d*40)-50;
  return result
}
//calculate volume
class Kata {
  static getVolumeOfCuboid(length, width, height) {
  return length*width*height;
  }
}