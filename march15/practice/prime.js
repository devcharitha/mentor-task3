//program that return boolean if the number is prime

function isPrime(num){

    if (num <2){
        return false;
    }
    for(let i=2;i <= Math.sqrt(num);i++){
        if(num % i === 0){
            return true;
        }
    }
}
console.log(isPrime(9));
