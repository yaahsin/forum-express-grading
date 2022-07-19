const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', admin)

router.get('/restaurants', restController.getRestaurants)
router.use('/', apiErrorHandler) // 每個經過"/"的路由都要經過這handler

module.exports = router
