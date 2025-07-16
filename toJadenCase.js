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
// test
console.log('i am a winners of the year'.toJadenCase())