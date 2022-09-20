// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  res.send('Hello from Auth Page GET')
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
// *** Login Page Start ***
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  res.send('Hello from Login Page POST')
})
// *** Login Page End ***
// *** Signup Page Start ***
router.get('/signup', (req, res) => {
  console.log(req)
  res.render('signup')
})

router.post('/signup', (req, res) => {
  console.log(req.body)
  res.redirect('/houses')
})
// *** Signup Page End ***
// *** Logout Page Start ***
router.get('/logout', (req, res) => {
  res.send('Goodbye from Logout page!!! GET')
})
// *** Logout Page End ***
// **** END NESTED ROUTES END ****

// **** END ROUTES END ****

// Export
module.exports = router
