
const express = require('express');
const app = express();
let json;

app.set('views', './public/views');

app.use(express.static('public'));
app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('hola.html');
});


const request = require('request');

const options = {
    url: 'http://localhost:8081/Administracion?servicio=productos',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};




if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');

    request(options, function(err, res, body) {

        let json = JSON.parse(body);
        localStorage.setItem('myFirstKey', JSON.stringify(json));
        //console.log(localStorage.getItem('myFirstKey'));
        console.log(json);
    });
}


   






const port = 3030;
app.listen(port, () => console.log(`App listening on port ${port}`))

