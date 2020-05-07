const router = require('express').Router();
const saleRouter = require('./sales');
const passport = require("../../config/passport");

//Sales Routes
router.use('/sales', saleRouter);

module.exports = router;
