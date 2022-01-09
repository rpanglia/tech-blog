const router = require('express').Router();

const apiRoutes = require('./api/');
const mainHomeRoutes = require('./mainhome-routes');
const dashboardRoutes = require('./dash-routes');

router.use('/', mainHomeRoutes);
router.use('/home', mainHomeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;