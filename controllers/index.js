// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
router.get('/', (req, res) => {
  res.send('Hello from Index')
})

router.post('/', (req, res) => {
  // code here
})

router.patch('/', (req, res) => {
  // code here
})

router.delete('/', (req, res) => {
  // code here
})

// Export
module.exports = router
