// Callback Function Example

function greet(name, myFunction) {
    console.log('Hello world');
    myFunction(name);
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

setTimeout(greet, 2000, 'ram', sayName);

// output-
// Hello world
// Hello ram