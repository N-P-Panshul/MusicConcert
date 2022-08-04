var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});


router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});
var email="panshulnp@gmail.com";
router.post('/submit' ,function(req,res){
  let name=req.body.name;
  email=req.body.email;
  let number=req.body.number;

  fs.appendFile('data.txt',`name: ${name},email: ${email},number:${number}\n`,function(e){
    if(e){
      console.log(e);
    }
  })
})

var transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'panshulnp@gmail.com',
    pass:'qxhmlsjucgenvjky'
  }
})

var mailOptions = {
  from: 'panshulnp@gmail.com',
  to: email,
  subject: 'Successfully Tickets Booked',
  text: 'Congratulation you have successfully booked the ticket for the upcoming event'
  }
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
    console.log(error);
    }else {
    res.render('success')
    }
    });
module.exports = router;
