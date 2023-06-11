
const router = require('express').Router();

const appointController = require('../controllers/appointController');

const auth = require('../middlewares/verifyToken');


router.post('/newAppointment', auth, appointController.createAppointment);


module.exports = router;