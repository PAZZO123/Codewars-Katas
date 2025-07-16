Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function() {
     return this.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
   }
  }
);
// test in console
console.log('i am a winners of the year'.toJadenCase())