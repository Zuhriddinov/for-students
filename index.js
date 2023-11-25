

function errey(arr1,arr2){
    return arr1.length === arr2.length && arr1.every((value,index) => value === arr2[index]);

}

console.log(errey([1,2,3],[1,2,3]));