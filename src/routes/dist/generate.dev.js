"use strict";

var express = require('express');

var router = express.Router();

var componentController = require('../controllers/componentController');

var validateApiKey = require('../middlewares/validateApiKey');

router.post('/', validateApiKey, componentController.generate);
module.exports = router;