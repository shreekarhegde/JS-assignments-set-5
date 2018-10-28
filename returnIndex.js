// function index(array,target){
//     var x = [];
//     array.forEach(function(element){
//         //console.log(element);
//         for(var i = 1; i< array.length; i++){
//            // console.log(i);
//                 sum = element + array[i];
//                // console.log(sum);
//                 if(sum == target){
//                     x.push(array.indexOf(array[i],array[element]));
//                    // console.log(x)
                   
//                 }
//         } 
//     });
//     return x; 
//     }

//     console.log(index([10,20,10,40,50,60,70],50));


function pair(array,target){
    var x = [];
    for(var i = 0; i < array.length; i++ ){
        for(j = 0; j < array.length; j++){
                sum = array[i]+array[j];
                if(j == i+1 && sum == target){
                    x.push(j,i);
                    return x;
                }
                    
        }
        
    }
}
console.log(pair([10,20,10,40,50,60,70],50));
