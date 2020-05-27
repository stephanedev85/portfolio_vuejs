require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
console.log(process.env);


app.use(cors());
app.use(express.json())


app.post("/sendmail", async (req,res) =>{
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.orange.fr',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.USER_MAIL , // generated ethereal user
          pass: process.env.USER_PASS, // generated ethereal password
        },
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: req.body.Email, // sender address
        to: "stephaneweb@orange.fr", // list of receivers
        subject: req.body.Sujet, // Subject line
        // plain text body
        html: "<b>"+ req.body.Nom + "<br>" + req.body.Message +  "</b>", // html body
    });
    
   
    
    return res.json({
        status: 'ok',
        message: 'le mail est posté',
        data: info
    })
});

app.listen(4000 || process.env.PORT);
   
    
