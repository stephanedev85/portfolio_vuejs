/*
 * Welcome to my first api nodejs with VueJS in Front-End
 *
 * ********************************************************/

// Import Module
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const https = require('https');
const port = 3000;
const nodemailer = require('nodemailer');


// Use Module
app.use(cors());
app.use(express.json());

// Log process.env
// console.log(process.env)

/*
 * Routes
 * ******/

// Home
app.get("/", (req,res,)=>{
    return res.json({
        status: 'server',
        message: 'je te réponds' 
    })
})

// Nodemailer Post
app.post('/sendmail', async (req,res,)=>{
    
    https.globalAgent.options.secureProtocol = 'SSLv3_method';
    
    let transporter = nodemailer.createTransport({
        host: "smtp.orange.fr",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USER_NAME, // generated ethereal user
            pass: process.env.USER_PASS, // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });
 
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from:  req.body.Email, // sender address
      to: "stephaneweb@orange.fr", // list of receivers
      subject: req.body.Sujet, // Subject line
      tel: req.body.phone, // plain text body
      html: "<b>"+req.body.Message+"</b>", // html body
    });
  
    return res.json({
        status: 'server',
        message: 'Email send success',
        data: info
    })
    
    
})

app.listen(port || process.env.port, ()=>{
    console.log("le serveur tourne sur le port 3000"); 
});
