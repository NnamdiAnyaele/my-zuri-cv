var express = require('express');
const mongoose = require('mongoose')
var router = express.Router();
const ContactForm = require("../models/contactForm")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zuri-CV' });
});

router.post('/submit', async(req, res) => {
  try {

    const { name, email, comments} = req.body
    const contact = new ContactForm({ name, email, comments })
    const result = await contact.save()
    return res.status(201).json({message: "success", data: result})

  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router;
