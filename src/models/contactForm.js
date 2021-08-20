const { model, Schema } = require('mongoose')

const contactFormSchema = new Schema ({
    name: String,
    email: String,
    comments: String
},
{timestamps: true})

const ContactForm = model('contactForm', contactFormSchema)

module.exports = ContactForm;