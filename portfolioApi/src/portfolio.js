require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer')
const app = express();
const cors = require('cors');
var https = require('https');
app.use(cors());
app.use(express.json());


// ROUTES

app.get("/", (req,res,)=>{
    return res.json({
        status: 'server',
        message: 'je te réponds' 
    })
})



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
      text: req.body.Message, // plain text body
      html: "<b>"+req.body.Message+"</b>", // html body
    });
  
    return res.json({
        status: 'server',
        message: 'Email send success',
        data: info
    })
    
    
})
const port = 3000;
app.listen(port || process.env.port, ()=>{
    console.log("le serveur tourne sur le port 3000"); 
});


