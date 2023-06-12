const router = require('express').Router();
const auth = require('../middlewares/verifyToken');

//Requiring controllers:
const userController = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');

//Endpoints views:

router.get('/getUser', auth, userController.getUser);
router.put('/updateUser', auth, userController.updateUser);
router.get('/getAllUsers', auth, isAdmin, userController.getAllUsers);


module.exports = router;