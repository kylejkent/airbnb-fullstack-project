// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  res.send('Hello from Profile Page GET')
})
// *** GET end ***

// *** POST start ***
// router.post('/', (req, res) => {
//   res.send('Hello from Profile Page POST')
// })
// *** POST end ***

// *** PATCH start ***
router.patch('/', (req, res) => {
  res.send('Hello from Profile Page PATCH')
})
// *** PATCH end ***

// *** DELETE start ***
router.delete('/', (req, res) => {
  // code here
})
// *** DELETE end ***
// **** START NESTED ROUTES START ****

// **** END NESTED ROUTES END ****

// **** END ROUTES END ****

// Export
module.exports = router
