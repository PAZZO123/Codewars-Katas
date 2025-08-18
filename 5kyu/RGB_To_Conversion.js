function rgb(r, g, b) {
  let red=r<0?"00":r<255?r.toString(16).padStart(2,'0').toUpperCase():"FF"
  let blue=b<0?"00":b<255?b.toString(16).padStart(2,'0').toUpperCase():"FF"
  let green=g<0?"00":g<255?g.toString(16).padStart(2,'0').toUpperCase():"FF"

    return `${red}${green}${blue}`
}
//test cases
