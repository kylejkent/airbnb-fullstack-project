// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** start EXAMPLE ROUTE WITH ERROR start ****
// *** POST start ***
// router.post('/', (req, res, next) => {
//   try {
//     // code that should work
//   } catch (err) {
//     next(err)
//   }
// })
// *** POST end ***
// **** end EXAMPLE ROUTE WITH ERROR end ****
// **** START ROUTES START ****
// *** GET start ***
router.get('/', async (req, res, next) => {
  console.log(req.user)
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      res.render('profile', { user: req.user })
      // *** end authed user ***
    } else {
      res.redirect('/auth/login')
    }
    // res.render('profile')
  } catch (err) {
    next(err)
  }
})
// *** GET end ***

// *** POST start ***
// router.post('/', (req, res) => {
//   res.send('Hello from Profile Page POST')
// })
// *** POST end ***

// *** PATCH start ***
router.patch('/', async (req, res, next) => {
  console.log(req.user)
  console.log(req.body)
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      res.render('profile', { user: req.user })
      // *** end authed user ***
    } else {
      res.redirect('/auth/login')
    }
    // res.render('profile')
  } catch (err) {
    next(err)
  }
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
