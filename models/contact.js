 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const contactSchema = new Schema({
  name: {
    type: String,
    required: true, //zadaem que text est field obligatoire
  }, 
  link: {
    type: String,
    required: true, 
  }, 
 
});

//  scheme appliquer au modele
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;