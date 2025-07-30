const removeUrlAnchor=(url)=>url.includes('#')?url.slice(0,url.indexOf('#')):url
  
//test console
console.log(removeUrlAnchor('www.codewars.com#about'))
