const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const registerController = require('../controllers/registerController');
const { catchErrors } = require('../handlers/errorHandlers');

router.use('/', homeController.homePage);
router.use('/register', registerController.registerPage);

module.exports = router;
