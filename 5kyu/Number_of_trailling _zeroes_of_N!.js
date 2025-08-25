function zeros (n) {
  let factorial=Array.from({length:Number(n)}, (_,i)=>BigInt(i+1)).reduce((acc,el)=>acc*el,1n)
  let arr=factorial.toString().split('').reverse()
  let count=0
  for(let i=0;i<arr.length;i++){
     if(arr[i]!=='0'){
         break;
     }
     ++count
  }
  return count
}