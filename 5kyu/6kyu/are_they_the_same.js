function comp(a, b) {
  if(!a||!b) return false
  return a.map(x => x*x).sort().join() == b.sort().join();
}
//test cases
 let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
 let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp())