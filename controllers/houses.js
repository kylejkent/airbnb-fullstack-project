// Packages
const express = require('express')
const router = express.Router()

// Models
const Houses = require('../models/houses')

// Routes
// **** START ROUTES START ****
// *** GET start ***
router.get('/', async (req, res, next) => {
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      // *** start import houses
      let houses = await Houses.find(
        {},
        {
          title: 1,
          price: 1,
          rooms: 1,
          location: 1,
          photos: 1
        }
      )
      console.log('Check houses')
      console.log(houses)
      // *** end import houses
      // *** start render
      res.render('./houses/list', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        },
        houses
      })
      // *** end render
      // *** end authed user ***
    } else {
      res.render('./houses/list')
    }
  } catch (err) {
    next(err)
  }
})
// *** GET end ***//test
// *** POST start ***
router.post('/', async (req, res, next) => {
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      // res.render('./houses/list', {
      //   user: {
      //     avatar: req.user.avatar,
      //     name: req.user.name
      //   }
      // })
      // *** end authed user ***
      // *** start NEW HOUSE ***
      console.log('HOUSE TO CREATE')
      // *** Start handle create ***
      let mainPhoto = req.body.housePhotos[0]
      let houseToCreate = {
        description: req.body.houseDescription,
        host: req.user._id,
        location: req.body.houseLocation,
        photos: req.body.housePhotos,
        price: req.body.housePrice,
        rooms: req.body.houseRooms,
        title: req.body.houseTitle
      }
      console.log(mainPhoto)
      console.log(houseToCreate)
      let house = await Houses.create(houseToCreate)
      // *** End handle create
      // *** start redirect to house ***
      res.redirect(`/houses/${house.id}`)
      // *** end redirect to house ***
      // *** end NEW HOUSE ***
    } else {
      res.redirect('/auth/login')
    }
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
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      res.render('./houses/create', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
      // *** end authed user ***
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
// *** Create Page End ***
// *** ID Page Start ***
router.get('/:id', async (req, res, next) => {
  let house = await Houses.findById(req.params.id).populate({
    path: 'host',
    select: 'avatar name'
  })
  let mainPhoto = house.photos[0]
  console.log(house)
  console.log('Main Photo = ' + mainPhoto)
  res.render('./houses/one', {
    mainPhoto,
    house,
    user: {
      avatar: req.user.avatar,
      name: req.user.name
    }
  })
})

router.patch('/:id', (req, res, next) => {
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      res.render('./houses/list', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
      // *** end authed user ***
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', (req, res, next) => {
  try {
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      res.render('./houses/list', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
      // *** end authed user ***
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
    if (
      // *** start authed user
      req.isAuthenticated()
    ) {
      res.render('./houses/list', {
        user: {
          avatar: req.user.avatar,
          name: req.user.name
        }
      })
      // *** end authed user ***
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
