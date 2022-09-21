// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  res.send('Hello from Reviews Page GET')
})
// *** GET end ***

// *** POST start ***
router.post('/', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.send('Hello from Reviews Page POST', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('/auth/login')
    }
    // res.render('profile')
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
