function isPrime(n){
    if(n===1) return false;
     if(n===2) return true;
      if(n%2===0) return false;
        for(let i=3; i<=Math.sqrt(n); i+=2){
           if(n%i===0){
              return false;
             }
             }
               return true
               }
               //Function to return Array of prime from and boundary inclusive
                function prime(num){
                    return Array.from({length:num},(_,i)=>i+1).filter(n=>isPrime(n))
                     }