
const express=require('express');

let userRouter=require('./users');
let showRouter=require('./shows');
let peopleRouter=require('./people');

const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send('');
});

app.use('/users', userRouter);

app.use('/shows', showRouter);

app.use('/people',peopleRouter);

app.get('*',(req,res)=>{
    res.send(`<h1><span style="color:red">404</span>: Nobody here but us chickens!`);
});

app.listen(port,()=>console.log(`running at: ${port}`));
