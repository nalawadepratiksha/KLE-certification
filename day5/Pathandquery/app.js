const express = require('express');
const app = express();

// app.get('/dog',(req,res)=>{
//     res.send('<h1>hello</h1>');
// })
// app.get('/cat',(req,res)=>{
//     res.send('<h1>meow</h1>');
// })
// app.get('/monkey',(req,res)=>{
//     res.send('<h1>hey monkey</h1>');
// })

// app.get('/animal/:anything',(req,res)=>{
//     console.log(req.params);
//     console.log(req.params.anything);
//     const {anything} =req.params;
//     res.send(`<h1> i am ${anything} </h1>`);
// })
 app.get('/search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.name);
    const {name} = req.query;
    res.send(`<h1> my query is ${name} </h1>`);
  })
 




app.listen(8080,()=>{
    console.log('server is connected to port 8080');
})