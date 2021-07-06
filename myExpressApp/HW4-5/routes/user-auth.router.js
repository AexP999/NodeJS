const router = require('express').Router();

const { userAuthController } = require('../controllers');
const { userAuthMiddleware } = require('../middlewares');

router.get('/login',
  // userAuthMiddleware.checkUserAuthValidity,
  // userAuthMiddleware.checkIsEmailAbsent,
  userAuthController.authUser);

router.post('/logout',
  // userAuthMiddleware.checkUserAuthValidity,
  // userAuthMiddleware.checkIsEmailAbsent,
  userAuthController.authUser);

module.exports = router;
