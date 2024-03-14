// creating a object using literal-function and changing property of object

let person = {
    name: 'Sam'
}
console.log(person.name); 
let student = person;

// changes the property of an object
student.name = 'John';

// changes the origins object property
console.log(person.name);