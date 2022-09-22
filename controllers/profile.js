// Packages
const express = require('express')
const router = express.Router()

// Models
const Users = require('../models/users.js')
const Houses = require('../models/houses.js')

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
      let userHouses = await Houses.find({ host: req.user._id })
      console.log(userHouses)

      res.render('profile', { user: req.user, userHouses })
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
  console.log(req.user._id)
  console.log(req.body)
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      // res.render('profile', { user: req.user })
      // *** end authed user ***
      let updateUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      }
      console.log(req.user._id)
      console.log(updateUser)
      // *** start update profile ***
      let loggedUser = await Users.findByIdAndUpdate(req.user._id, updateUser, {
        new: true
      })
      // *** end update profile ***
      // *** start render updated
      // *** end render updated
      req.login(loggedUser, err => {
        if (err) {
          throw err
        }
        res.redirect('/profile')
      })
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
