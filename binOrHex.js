/*This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.*/

var evensAndOdds=(num)=>num%2===0?num.toString(2):num.toString(16);
console.log(evensAndOdds(9))
//test 