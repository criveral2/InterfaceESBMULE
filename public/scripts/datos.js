

function mostrar(){
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    
        request(options, function(err, res, body) {
    
        
            var guardado = localStorage.getItem('myFirstKey');
             
   
            //console.log(localStorage.getItem('myFirstKey'));
            console.log(json);
        });
    }
 
    
  
    
}
