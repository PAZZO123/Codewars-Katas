String.prototype.camelCase=function(){
 return this.split(' ').map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join('')
}
//test cases