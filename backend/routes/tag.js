const express = require('express')
const router = express.Router()

// controllers
const { requireSignin, adminMiddleware } = require('../controllers/authApiController');
const { create, list, read, remove } = require('../controllers/tagApiController');

// validators
const { runValidation } = require('../validators');
const { createTagValidator } = require('../validators/tagValidator');

// only difference is methods not name 'get' | 'post' | 'delete'
router.post('/tag', createTagValidator, runValidation, requireSignin, adminMiddleware, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;