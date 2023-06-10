const router = require('express').Router();
const auth = require('../middlewares/verifyToken');

//Requiring controllers:
const userController = require('../controllers/userController');

//Endpoints views:

router.get('/getUser', auth, userController.getUser);
router.put('/updateUser', auth, userController.updateUser);


module.exports = router;