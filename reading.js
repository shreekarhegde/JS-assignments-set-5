function read(library){
    res = [];
    for(var key in library){
       
        if(Object.keys(library[key]).length> 0){
            if(library[key].readingStatus){
                res[key] = library[key];
                 }  
                
                } 
                else if(Object.keys(library[key]).length == 0){
            res = [];
        }
        else{
            res[key] = [];
        }
       
        
           
     }
    return res;
}
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
console.log(read(library));