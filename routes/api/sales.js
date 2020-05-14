const router = require('express').Router();
const salesController = require('../../controllers');

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

router.route('/search')
    .get(searchController.findAll)
    .post(searchController.create);

// Matches with 'api/search/:id'
router
    .route('/search/:id')
    .get(searchController.findById)
    .put(searchController.update)
    .delete(searchController.remove);

module.exports = router;
