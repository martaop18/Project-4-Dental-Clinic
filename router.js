const router = require('express').Router();

//1.We require and get into the routes:

const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const appointmentRoutes = require('./views/appointmentRoutes')


router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/appointments', appointmentRoutes);


module.exports = router;