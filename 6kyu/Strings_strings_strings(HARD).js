Array.prototype.toString = function() {
  return "[" + this.map(v => typeof v  === "string" ? `'${v}'` : v).join(",") + "]";
}