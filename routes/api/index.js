const router = require('express').Router();

const userRoutes = require('../../controllers/api/userRoutes');

router.use('/users', userRoutes);

module.exports = router;