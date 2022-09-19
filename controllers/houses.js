// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  res.render('./houses/list')
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
  res.render('./houses/create')
})
// *** Create Page End ***
// *** ID Page Start ***
router.get('/:id', (req, res) => {
  res.render('./houses/one')
})

router.patch('/:id', (req, res) => {
  res.send('Hello from ID Page PATCH')
})

router.delete('/:id', (req, res) => {
  res.send('Hello from ID Page DELETE')
})
// ** Edit ID Start**
router.get('/:id/edit', (req, res) => {
  res.render('./houses/create')
})
// ** Edit ID End **
// *** ID Page End ***
// **** END NESTED ROUTES END ****
// **** END ROUTES END ****

// Export
module.exports = router
