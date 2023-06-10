const router = require('express').Router();

//1.We require and use the routes:

const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes);


module.exports = router;