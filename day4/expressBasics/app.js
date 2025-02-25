const express = require('express');
const app = express();

//middleware
//app.use('/hello',(req,res)=>{
    //console.log(req);
    //res.send('<h1>response from server</h1>');
    //console.log(res);

// })

//get

app.get('/thaakgaye',(req,res)=>{

    res.send('<h1>respose from my routes</h1>');
})

app.get('/my',(req,res)=>{
    res.send('<h1>respose nahi aya</h1>');
})

app.get('/raja',(req,res)=>{
    res.send('<h1> how are you </h1>');
})
app.get('/change',(req,res)=>{
    res.send('<h1> hello ji</h1>');
})









app.listen(8080,() => {
    console.log('server is running at port 8080');
})