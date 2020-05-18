const router = require('express').Router();
const salesController = require('../../controllers/salesController');

// Matches with 'api/sales'
router.route('/post')
    .get(salesController.findAll)
    .post(salesController.create);

// Matches with 'api/sales/:id'
router
    .route('/post/:id')
    .get(salesController.findById)
    .put(salesController.update)
    .delete(salesController.remove);

router.route('/sales')
    .get(salesController.findAll)
    .post(salesController.create);

// Matches with 'api/sales/:id'
router
    .route('/sales/:id')
    .get(salesController.findById)
    .put(salesController.update)
    .delete(salesController.remove);

module.exports = router;
