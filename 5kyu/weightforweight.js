function orderWeight(strng) {
  return strng
    .trim()
    .split(' ')
    .sort((a, b) => {
      const suma = a.split('').reduce((acc, el) => acc + (+el), 0);
      const sumb = b.split('').reduce((acc, el) => acc + (+el), 0);

      if (suma=== sumb) {
        //ort alphabetically (as strings)
        return a.localeCompare(b);
      }
      return suma - sumb;
    })
    .join(' ');}