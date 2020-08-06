const express = require('express');
const app = express();

app.use(express.static("public"))

app.get('/', function (req, res) {
    let students = [
        {name: "Afolabi", age: 34},
        {name: "Caroline", age: 24},
        {name: "Dele", age: 31},
    ]
    res.render('home.ejs', {students});
})

app.get('/:home/:area/', (req, res) => {
    console.log(req.params);
    res.send('Parameters Page');
})

app.get('/dogs', function (req, res) {
    res.render('dogs.ejs');
})

app.listen(3000, console.log('site opening on port 3000'));
