const express = require('express');
const router = express.Router();
const { create } = require('../controllers/blogApiController');

const { requireSignin, adminMiddleware } = require('../controllers/authApiController');

router.post('/blog', requireSignin, adminMiddleware, create);

module.exports = router;