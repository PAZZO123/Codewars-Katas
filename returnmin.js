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
