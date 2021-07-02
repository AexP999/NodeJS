const router = require('express').Router();

const { userAuthController } = require('../controllers');
const { userAuthMiddleware } = require('../middlewares');

router.post('/',
  userAuthMiddleware.checkUserAuthValidity,
  userAuthMiddleware.checkIsEmailAbsent,
  userAuthController.authUser);

module.exports = router;
