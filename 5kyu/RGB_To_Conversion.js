function rgb(r, g, b) {
  const convert=(c)=>c<0?"00":c<=255?c.toString(16).padStart(2,'0').toUpperCase():"FF"
    return `${convert(r)}${convert(g)}${convert(b)}`
}
//test cases
console.log(rgb(255,255,255))//FFFFFF