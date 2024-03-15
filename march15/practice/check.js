function highAndLow(numbersString){
    let numbers=numbersString.split(" ").map(Number);
    let high=Math.max(...numbers);
    let low=Math.min(...numbers);

    let result=high +" "+ low;
    console.log(result);
}
highAndLow('1 2 3 4 5');