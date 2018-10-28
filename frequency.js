// Write a function that takes a string and returns an object containing the count for each character in the string.
// Examples
// INPUT: frequency('abca');
// OUTPUT: {a: 2, b: 1, c: 1}
// INPUT: frequency('');
// OUTPUT: { }

function frequency(string){  
    var obj = {}; 
    string.split('').forEach(function(element) {
        
        if(!obj.hasOwnProperty(element)){
            obj[element] = 1;
        }
        else{
            obj[element] =  obj[element] + 1;
        }
    });
    return obj;
    }
console.log(frequency('a'));