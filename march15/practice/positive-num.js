//sum of postive numbers and return zero if array is empty

function sumOfPostiveNumbers(arr){
    let sum =0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            sum +=arr[i];
        }
    }
    return sum;
}
console.log(sumOfPostiveNumbers([1,-2,3,9]));
console.log(sumOfPostiveNumbers([ ]));