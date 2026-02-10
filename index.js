const http = require('http');
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.listen('8004',()=>{
    console.log("calculator app running");
});
app.get("/",(req,res)=>{
    res.render('home');

})
