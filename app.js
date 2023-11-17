//to get the intellisence

/** @type {import("express").RequestHandler} */
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


app = express();

// connect to mongoDB
const dbURI = "mongodb+srv://ahmed:test1234@cluster0.eicozng.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result) => {
    console.log('Connected to DB');
}).catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs'); // by defalut it looks into view folder but it can be changed

app.listen(3000);
// just show logs and use next() in the background so that code bellow use also works
app.use(morgan('dev'));

// middleware and static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('<p> what the hell ! </p>'); // response with basic HTML
    // res.senfile('./views/about.html', {root: __dirname}); // response with an HTML file saved in view folder
    res.render('index', {title: 'Home'});
    // res.redirect('./about'); // this is how we redirect the page
});
app.use((req, res) => {
    res.status(404).senfile('./views/404.html', {root: __dirname});
});

