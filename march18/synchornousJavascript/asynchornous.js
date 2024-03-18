// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}
f(); 

//  since function return promise we can use then()
// .then(function(result) {
//     console.log(result)

//output-Async function.
//using then() we get 1 as output along async function