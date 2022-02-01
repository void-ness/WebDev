// importing required modules
const fs = require('fs');
const express = require('express');
const path = require('path');
const port = 500;

// creating express app
const app = express();
app.use('/static', express.static('static'));

// initialising views engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'template'));
app.use(express.urlencoded({extended:true}));

// url routing initialising

app.get('/', (req,res) => {
    res.status = 220;
    res.render('home.pug',{status:'not available as of now'});
})

app.post('/', (req,res) => {
    let content = req.body;
    let name1 = content.Username;
    let pass = content.pass;
    code = fs.readFileSync('./database/pass.txt');
    if (pass == code){
        res.status = 220;
        res.render('home.pug',{name:name1 ,status:'accepted'});
        fs.writeFileSync('./database/usernames.txt',name1);
    }

    else{
        res.status(420).render('home.pug',{name:name1, status:'rejected'});
    }
})

// port listening
app.listen(port, () => {
    console.log("The App is running");
})