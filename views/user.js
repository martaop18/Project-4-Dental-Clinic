const router = require('express').Router();

const authController = require('../controllers/userController');

router.get('/get', authController.getUser);



module.exports = router;