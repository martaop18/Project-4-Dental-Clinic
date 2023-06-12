const router = require('express').Router();
const auth = require('../middlewares/verifyToken');

//REQ USER CONTROLLER
const userController = require('../controllers/userController');

//MIDDLEWEAR ADMIN || DOCTOR
const isAdmin = require('../middlewares/isAdmin');


//ENDPOINTS USER

router.get('/getUser', auth, userController.getUser);
router.put('/updateUser', auth, userController.updateUser);
router.get('/getAllPatients', auth, isAdmin, userController.getAllPatients);

module.exports = router;