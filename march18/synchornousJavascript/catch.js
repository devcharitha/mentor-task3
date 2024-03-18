// usage of catch() when promise is rejected

let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

countValue.catch(
    function errorValue(result) {
        console.log(result);
    }
);

//output-Promise rejected