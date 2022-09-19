// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  res.send('Hello from multiple Houses Page GET')
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
// **** START NESTED ROUTES START ****
// *** Create Page Start ***
router.get('/create', (req, res) => {
  res.send('Hello from Create Page GET')
})
// *** Create Page End ***
// *** ID Page Start ***
router.get('/:id', (req, res) => {
  res.send('Hello from ID Page GET')
})

router.patch('/:id', (req, res) => {
  res.send('Hello from ID Page PATCH')
})

router.delete('/:id', (req, res) => {
  res.send('Hello from ID Page DELETE')
})
// ** Edit ID Start**
router.get('/:id/edit', (req, res) => {
  res.send('Hello from ID EDIT Page GET')
})
// ** Edit ID End **
// *** ID Page End ***
// **** END NESTED ROUTES END ****
// **** END ROUTES END ****

// Export
module.exports = router
