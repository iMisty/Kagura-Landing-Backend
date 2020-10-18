import * as Mongoose from 'mongoose';

const ContactModel = new Mongoose.Schema({
  icon: String,
  title: String,
  content: String
})

module.exports = Mongoose.model('Content',ContactModel)