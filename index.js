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
    res.render('layouts/app', { page: 'home' });
});

  
app.get("/emi-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/emi' });
});

app.get("/cgpa-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/cgpa' });
})
app.get("/sip-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/sip' });
})
app.get("/gst-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/gst' });
})
app.get("/percentage-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/percentage' });
})

app.get("/age-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/age' });
})
app.get("/ctc-calculator",(req,res)=>{
    res.render('layouts/app', { page: 'pages/ctc' });
});
app.get("/privacy-policy",(req,res)=>{
    res.render('layouts/app', { page: 'pages/privacy_policy' });
})
app.get("/about_us",(req,res)=>{
    res.render('layouts/app', { page: 'pages/about_us' });
})
app.get("/g_verfication",(req,res)=>{
    res.render('google0e4790a82b06ae7c');
})

