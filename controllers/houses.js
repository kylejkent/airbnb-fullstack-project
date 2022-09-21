// Packages
const express = require('express')
const router = express.Router()

// Models
// const Products = require('../models/products')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.render('./houses/list', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('./houses/list')
    }
  } catch (err) {
    next(err)
  }
})
// *** GET end ***

// *** POST start ***
router.post('/', async (req, res, next) => {
  console.log(req.body)
  try {
    if (req.isAuthenticated()) {
      res.render('houses', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('/auth/login')
    }
    // *** start NEW HOUSE ***
    console.log('HOUSE TO CREATE')
    // *** Start handle create ***
    let host = req.user._id
    let mainPhoto = req.body.housePhotos[0]
    let houseToCreate = {
      description: req.body.houseDescription,
      host: host,
      location: req.body.houseLocation,
      photos: req.body.housePhotos,
      price: req.body.housePrice,
      rooms: req.body.houseRooms,
      title: req.body.houseTitle
    }
    console.log(host)
    console.log(mainPhoto)
    console.log(houseToCreate)
    let house = await Houses.create(houseToCreate)
    // let loggedUser = await Users.findOne({ email: user.email })
    // req.login(loggedUser, err => {
    // 	if (err) {
    // 		throw err
    // 	}
    // })
    console.log('LOGGED IN USER:  ' + req.user)
    res.redirect('/houses')
    // *** End handle create
    // *** end NEW HOUSE ***
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
// *** Create Page Start ***
router.get('/create', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('./houses/create', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
// *** Create Page End ***
// *** ID Page Start ***
router.get('/:id', (req, res) => {
  res.render('./houses/one')
})

router.patch('/:id', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('./houses/create', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.send('Hello from ID Page DELETE', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
// ** Edit ID Start**
router.get('/:id/edit', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('./houses/create', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
// ** Edit ID End **
// *** ID Page End ***
// **** END NESTED ROUTES END ****
// **** END ROUTES END ****

// Export
module.exports = router
