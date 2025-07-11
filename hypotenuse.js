//to find hypotenus and throw error 6 Kyu
function calculateHypotenuse(a, b) {

  if (
    typeof a !== 'number' || typeof b !== 'number' ||
    !isFinite(a) || !isFinite(b) ||
    a <= 0 || b <= 0
  ) {
    throw new Error("Invalid input");
  }

  const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  return Number(hypotenuse.toFixed(3));
}
console.log(calculateHypotenuse(3))