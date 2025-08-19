function generateHashtag (str) {
  const result=str=>"#"+(str.split(' ').map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(''))
  if(result(str).length===1 || result(str).length>140) return false
  return result(str)
}