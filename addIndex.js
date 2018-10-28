function addArray(array1,array2){
    var sumArray = [];
    var sliced,length;
    console.log(array1,array2);
    if(array1.length>array2.length){
        length = array2.length;
    }
    else{
        length = array1.length;
    }
    for(var i = 0; i < length; i++){
        sum = array1[i] + array2[i];
        sumArray.push(sum);
    }
        if(array2.length > array1.length){
           sliced =  array2.slice(array1.length);
        sliced.forEach(function(element){
                sumArray.push(element);
        });
        }
        else{
            sliced =  array1.slice(array2.length);
            sliced.forEach(function(element){
                sumArray.push(element);
        });
        }

    return sumArray;
}

console.log(addArray([1,2,3,4,5],[1,2,3,4,5,6]));