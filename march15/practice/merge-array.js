function mergeArrays(arr1,arr2){
    //return[...arr1,...arr2];
    const mergedArray=[];
    for(i=0;i<arr1.length;i++){
        mergedArray.push(arr1[i]);
    }
    for(j=0;j<arr1.length;j++){
        mergedArray.push(arr2[j]);
    }
    console.log(mergedArray);
}
const array1=[1,2,3];
const array2=[4,5,6];
//const mergedArray=mergeArrays(arr1,arr2);
// console.log(mergedArray);
mergeArrays(array1,array2);



// [1,2,3,5,6]