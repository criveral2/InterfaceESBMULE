const express = require('express');
const app = express();


app.set('views', './public/views');

app.use(express.static('public'));
app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('hola.html');
});


const port = 3030;
app.listen(port, () => console.log(`App listening on port ${port}`))