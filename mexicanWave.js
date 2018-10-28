function mexican(string){
    var splitted = [],pushed = [],x = [],firstLetter;
    for(var i = 0; i < string.length; i++){
        splitted = string.split('');
        if(splitted[i]!== splitted[i].toUpperCase()){
          firstLetter = splitted[i].toUpperCase();
        }
        else{
          firstLetter = splitted[i];  
              }
           splitted.splice(i,1);
           splitted.splice(i,0,firstLetter);
           x = splitted.join('');
          pushed.push(x);
          pushed.join('');
         
    }
       pushed.join('');
       console.log(pushed,'...',pushed[0],pushed[0][0]);
       pushed[0][0] = pushed[0][0].toLowerCase();
         return pushed;
}


console.log(mexican('hello'));
console.log(mexican('Gap'));