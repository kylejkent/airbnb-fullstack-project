const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let reviewsModel = mongoose.model('users', {
  author: {
    type: ObjectId,
    ref: 'Users',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: ObjectId,
    ref: 'houses',
    required: true
  }
})
module.exports = reviewsModel
