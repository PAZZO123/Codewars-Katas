function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0;

  const sorted = arr.slice().sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();

  return sorted.reduce((sum, val) => sum + val, 0);
}
/*Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting*/

var enough=(cap, on, wait)=>wait<=(cap-on)?0:(on+wait)-cap