function duplicate(array){
    var x = [];
    for(var i = 0 ;i < array.length; i++){
        for(var j = 0; j < array.length; j++){
           if(array[i] == array[j] && !x.includes(array[j]) && i!=j){
               x.push(array[j]);
                        break;
                    }
            }

        }

    return x;    

            

    // let unique = [];
    // array.forEach(ele => {
    //     if(unique.indexOf(ele) == -1){
    //         unique.push(ele);
    //     }
    // });
    // return unique;
}
console.log(duplicate([10,20,30,10,20,30,40,50,60,60]));

