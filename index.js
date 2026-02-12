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


app.get("/sitemap.xml",(req,res)=>{
    res.header('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
      <url>
        <loc>https://calculator-production-705d.up.railway.app/</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>1.0</priority>
      </url>
    
      <url>
        <loc>https://calculator-production-705d.up.railway.app/emi-calculator</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>0.9</priority>
      </url>
    
     <url>
        <loc>https://calculator-production-705d.up.railway.app/cgpa-calculator</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>0.9</priority>
      </url>
    
       <url>
        <loc>https://calculator-production-705d.up.railway.app/sip-calculator</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>0.9</priority>
      </url>
    
    
      <url>
        <loc>https://calculator-production-705d.up.railway.app/gst-calculator</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>0.9</priority>
      </url>
    
    
      <url>
        <loc>https://calculator-production-705d.up.railway.app/age-calculator</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>0.8</priority>
      </url>
    
      <url>
        <loc>https://calculator-production-705d.up.railway.app/percentage-calculator</loc>
        <lastmod>2026-02-12</lastmod>
        <priority>0.8</priority>
      </url>
    
    </urlset>
    `);
});

