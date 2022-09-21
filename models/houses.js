const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let housesModel = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photos: [
    {
      type: String
    }
  ],
  price: {
    type: Number,
    required: true
  },
  room: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
module.exports = housesModel
