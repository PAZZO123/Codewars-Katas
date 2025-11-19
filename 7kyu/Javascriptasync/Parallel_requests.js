function isPostive(n){
    return new Promise(function(resolve, reject){
        if(n>=0) resolve(n);
        reject("Invalid number")
    });
}
Promise.all([isPostive(4),isPostive(5),isPostive(6),isPostive(9)])
.then(([a,b,c,d])=>console.log(a,b,c,d))
.catch(err=>console.log(err))
