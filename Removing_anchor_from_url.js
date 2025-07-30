const removeUrlAnchor=(url)=>url.includes('#')?url.slice(0,url.indexOf('#')):url
  
//test console
console.log(removeUrlAnchor('www.codewars.com#about'))//www.codewars.com
console.log(removeUrlAnchor('www.codewars.com/katas/'))//www.codewars.com/katas/