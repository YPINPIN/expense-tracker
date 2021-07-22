const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  value: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Category', categorySchema)
