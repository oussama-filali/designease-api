const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');
const validateApiKey = require('../middlewares/validateApiKey');

router.post('/', validateApiKey, componentController.generate);

module.exports = router;
