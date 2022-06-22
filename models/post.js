 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const postSchema = new Schema({
  text: {
    type: String,
    required: true, //zadaem que text est field obligatoire
  }, 
  title: {
    type: String,
    required: true, 
  }, 
  author: {
    type: String,
    required: true, //zadaem que text est field obligatoire
  }, 
 }, {timestamps: true});

//  scheme appliquer au modele
const Post = mongoose.model('Post', postSchema);

module.exports = Post;