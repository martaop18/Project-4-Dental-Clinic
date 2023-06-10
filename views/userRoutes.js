const router = require('express').Router();
const auth = require('../middlewares/verifyToken');
const userController = require('../controllers/userController');


router.get('/getUser', auth, userController.getUser);



module.exports = router;