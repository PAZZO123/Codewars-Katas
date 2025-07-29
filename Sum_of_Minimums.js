const sumOfMinimums=(arr)=> arr.reduce((acc,el)=>acc+el.sort((a,b)=>a-b)[0],0)

//test console