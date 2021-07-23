const express = require('express')
const router = express.Router()
const expressJwt = require('express-jwt')
const {authMiddleware,adminMiddleware, requireSignin } = require('../controllers/authApiController')
const {read } =require('../controllers/userApiController')

router.get('/profile', requireSignin , authMiddleware, read)

module.exports = router