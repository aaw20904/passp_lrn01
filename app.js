const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.urlencoded({extended:true}));


const UserModel= require('./config/database');


app.set("view engine", "ejs");

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/logout', (req, res) => {
    res.send('loout!');
});

app.get('/protected', (req, res) => {
    res.send('protected!');
});

app.post('/register', (req, res) => {
   
  let user = new UserModel({
        username: req.body.username,
        password: bcrypt.hashSync( req.body.password, 10),
    })

    user.save().then(user => console.log(user)); 
    res.send({success: true});
});

app.listen( 80, () => {
    console.log('Example app listening on port 80 !');
});

//Run app, then load http://localhost:  in a browser to see the output.