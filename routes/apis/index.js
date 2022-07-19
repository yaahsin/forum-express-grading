const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')
const userController = require('../../controllers/apis/user-controller')

router.use('/admin', authenticated, authenticatedAdmin, admin)

router.get('/restaurants', authenticated, restController.getRestaurants)
router.use('/', apiErrorHandler) // 每個經過"/"的路由都要經過這handler
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

module.exports = router
