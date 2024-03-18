// program that wait for promise result and then execute the async function

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
async function asyncFunc() { 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}
asyncFunc();

//output - Promise resolved
//hello