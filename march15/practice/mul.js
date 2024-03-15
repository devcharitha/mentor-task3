//program for multiplication of table using function

function multiplicationTable(num){
    
    for(let i=1; i<=10; i++){
        let table=i * num;
        console.log(num +" * "+ i + " = " + table);
    }
}
multiplicationTable(11);

