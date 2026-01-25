const cart=['shoes','pants','kurta']
createOrder(cart)
.then(function(result){
    return proceedToPayment(result)})
    .then(result=>{
        console.log(result)
    })
    .catch(result=>console.log(result.message))
function validateCard(cart){
    return cart.length>0
}

//producer part
function createOrder(cart){
    const pr=new Promise(function(resolve, reject){
        if(!validateCard(cart)){
            const err=new Error("Invalid card")
            reject(err)
        }
        //logic
        const orderId =123467
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
        }
    })
    return pr
}
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve('Payment Successfully');
    })
}