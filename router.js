const router = require('express').Router();


//we require and use the routes here:

const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes')

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;