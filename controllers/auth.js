// Packages
const express = require('express')
const router = express.Router()

// Models
const Users = require('../models/users.js')

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
  res.render('signup')
})
// *** signup page end ***
router.post('/signup', async (req, res, next) => {
  try {
    // *** start define user ***
    let user = {
      avatar: req.body.profilePicture,
      email: req.body.profileEmail,
      name: req.body.profileFullname,
      password: req.body.profilePassword
    }
    // *** end define user ***
    // *** start USER EXISTS ***
    // *** Start check if user already ***
    if ((await Users.countDocuments({ email: user.email })) > 0) {
      console.log(
        'BAD!!! MATCHING USER FOUND' +
          ' Num Found: ' +
          ((await Users.countDocuments({ email: user.email })) +
            ' User Email: ' +
            user.email)
      )
      {
        throw new Error(
          'User with this email already exists' +
            'BAD!!! MATCHES FOUND' +
            ' - Num Found: ' +
            ((await Users.countDocuments({ email: user.email })) +
              ' User Email: ' +
              user.email)
        )
      }
      // *** end USER EXISTS ***
    } else {
      // *** start NEW USER ***
      console.log('USER TO CREATE')
      // *** Start handle signup ***
      let userCreate = await Users.create(user)
      let loggedUser = await Users.findOne({ email: user.email })
      req.login(loggedUser, err => {
        if (err) {
          throw err
        }
      })
      console.log('LOGGED IN USER:  ' + req.user)
      res.redirect('/houses')
      // *** End handle Signup
      // *** end NEW USER ***
    }
  } catch (err) {
    next(err)
  }
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
