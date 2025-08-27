function comp(a, b) {
  if(!a||!b) return false
  return a.map(x => x*x).sort().join() == b.sort().join();
}
//test cases