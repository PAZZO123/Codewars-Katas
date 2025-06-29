function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0;

  const sorted = arr.slice().sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();

  return sorted.reduce((sum, val) => sum + val, 0);
}
