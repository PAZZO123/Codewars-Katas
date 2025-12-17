const solution=(...args)=>!args.every(n=>args.indexOf(n)===args.lastIndexOf(n))
//test cases
console.log(solution(1,2,3))//->false