Array.prototype.toString = function() {
  return "[" + this.map(v => typeof v  === "string" ? `'${v}'` : v).join(",") + "]";

}
//test cases
console.log([123,'pazzo'].toString())//"[123,'pazzo']" will 