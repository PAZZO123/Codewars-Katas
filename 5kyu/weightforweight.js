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
    //test cases
    console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))