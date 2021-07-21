const express = require('express');
const router = express.Router()
const { time } = require('../controllers/blogApiController')

router.get('/',time);

module.exports = router;