
const router = require('express').Router();

const appointmentController = require('../controllers/appointmentController');

const auth = require('../middlewares/verifyToken');


router.post('/newAppointment', auth, appointmentController.createAppointment);
router.delete('/:id', auth, appointmentController.deleteAppointment);
router.put('/:id', auth, appointmentController.updateAppointment);
router.get('/patientAppointments', auth,appointmentController.getUserAppointments);

module.exports = router;