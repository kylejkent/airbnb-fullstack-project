// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  res.send('Hello from Reviews Page')
})
// *** GET end ***

// *** POST start ***
router.post('/', (req, res) => {
  // code here
})
// *** POST end ***

// *** PATCH start ***
router.patch('/', (req, res) => {
  // code here
})
// *** PATCH end ***

// *** DELETE start ***
router.delete('/', (req, res) => {
  // code here
})
// *** DELETE end ***
// **** END ROUTES END ****

// Export
module.exports = router
