var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var showRouter=require('./routes/shows');
var peopleRouter=require('./routes/people');

var app = express();

// app.use(logger('dev'));
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));


const port=3000;

app.get('/',(req,res)=>{
    res.send('Welcome, welcome to buenosite');
});

app.use('/users', userRouter);

app.use('/shows', showRouter);

app.use('/people', peopleRouter);

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red">404</span>: Nobody here but us chickens!`);
});

app.listen(port,()=>console.log(`running at: ${port}`));

module.exports = app;