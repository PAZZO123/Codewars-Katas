function clamp(number, a, b, result) {
  let min, max;
  if (typeof b === 'undefined') {
    min = 0;
    max = a;
  } else {
    min = a;
    max = b;
  }

  // Number is in range: return as-is
  if (number >= min && number <= max) return number;

  // If result (4th argument) is provided, use it
  if (arguments.length === 4) {
    if (typeof result === 'function') {
      return result(number, min, max);
    }
    return result; // could be number, string, boolean, etc.
  }

  // Default clamp behavior
  if (number < min) return min;
  if (number > max) return max;
}
clamp( 5, 10 )    // -> 5
clamp(-5, 10 )    // -> 0
clamp(15, 10 )    // -> 10

clamp( 5, 2, 12 ) // -> 5
clamp( 0, 2, 12 ) // -> 2
clamp(15, 2, 12 ) // -> 12

// -- result value provided...
clamp( 0, 2, 12, 6 )     // -> 6 
clamp( 0, 2, 12, false ) // -> false
clamp( 0, 2, 12, "???" ) // -> "???"
//.. but ...
clamp( 7, 2, 12, 6 )     // -> 7 ) 
clamp( 7, 2, 12, false ) // -> 7 } because 7 is in the range [2,12]
clamp( 7, 2, 12, "???" ) // -> 7 )

// -- result provided by a function
var mid = function(n,a,b){ return a+(b-a)/2 }
clamp( 0, 2, 12, mid ) // -> 7 ( = 2+(12-2)/2 )
/*result (fourth argument) may be :
a number
a string
a boolean
a date
a function, whith number, min & max as proper arguments*/