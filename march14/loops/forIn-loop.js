//program to  iterate over the properties of an object

const student = {
    name: 'Monica',
    class: 7,

}
for ( let key in student ) {
    console.log(key,student[key]);
}

//output:
// name Monica
// class 7