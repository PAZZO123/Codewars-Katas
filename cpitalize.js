function capitalizeOdd(str){
    var capital=str.split('').reduce(function(n,m,i){
        if(i%2===1) return n+m.toUpperCase();
        return n+m
        
    },"")
    return capital;
}
console.log(capitalizeOdd("Javascript"));