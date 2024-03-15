//calculating average of numbers

function calculateAverage(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum/numbers.length;
}

const numbers = [5,10,15,20];
const average = calculateAverage(numbers);
console.log("The average is: " + average);