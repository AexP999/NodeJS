const router = require('express').Router();

const { userAuthController } = require('../controllers');
const { userAuthMiddleware } = require('../middlewares');

router.post('/login',
  userAuthMiddleware.checkPassAndEmail,
  userAuthMiddleware.checkUserAuthValidity,
  userAuthController.userLogin);

router.post('/:userId/avatar',
  // userAuthMiddleware.checkPassAndEmail,
  // userAuthMiddleware.checkUserAuthValidity,
  userAuthController.userLogin);

router.post('/logout',
  userAuthMiddleware.checkingAccessToken,
  userAuthController.userLogout);

router.post('/refresh',
  userAuthMiddleware.checkingRefreshToken,
  userAuthController.userRefresh);

module.exports = router;
