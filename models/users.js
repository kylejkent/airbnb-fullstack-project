const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let usersModel = mongoose.model('users', {
  avatar: String,
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = usersModel
