//adding another object within the existed object and accessing their properties

const person = { 
    name: 'ramana', 
    age: 45,
    properties: {
        land: 1,
        houses: 3
    }
}
console.log(person.properties); 
console.log(person.properties.houses); 

//output-{ land: 1, houses: 3 } and 3