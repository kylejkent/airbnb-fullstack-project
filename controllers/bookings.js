// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
// router.get('/', (req, res) => {
//   res.send('Hello from Bookings Page')
// })
// *** GET end ***

// *** POST start ***
router.post('/', (req, res, next) => {
  try {
    // code that should work
  } catch (err) {
    next(err)
  }
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
// **** START NESTED ROUTES START ****

// **** END NESTED ROUTES END ****

// **** END ROUTES END ****

// Export
module.exports = router
