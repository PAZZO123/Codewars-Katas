function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
//test console
console.log(factorial(10))