// function requiresLogin(req, res, next) {
//   if (req.session && req.session.userId) {
//     return next();
//   } else {
//     var err = new Error('Log in to view page.');
//     err.status = 401;
//     return next(err);
//   }
// }
// router.get('/', mid.requiresLogin, function(req, res, next) {
//   //...
// });