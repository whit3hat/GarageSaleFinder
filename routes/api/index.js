const router = require('express').Router();
const saleRouter = require('./sales');


//Sales Routes
router.use('/sales', saleRouter);

module.exports = router;
