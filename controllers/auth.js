// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
router.get('/auth', (req, res) => {
  res.send('Hello from Auth Page')
})

router.post('/auth', (req, res) => {
  // code here
})

router.patch('/auth', (req, res) => {
  // code here
})

router.delete('/auth', (req, res) => {
  // code here
})

// Export
module.exports = router
