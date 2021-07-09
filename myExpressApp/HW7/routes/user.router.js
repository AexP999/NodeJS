const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware, userAuthMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/',
  userMiddleware.checkUserValidity,
  userMiddleware.checkIsEmailExist,
  userController.createUser);

router.delete('/:userId',
  userMiddleware.checkIsUserPresent,
  userAuthMiddleware.checkingAccessToken,
  userController.deleteUserById);

router.put('/:userId',
  userMiddleware.checkUserUpdateValidity,
  userMiddleware.checkIsUserPresent,
  userAuthMiddleware.checkingAccessToken,
  userController.updateUserById);

router.get('/:userId', userMiddleware.checkIsUserPresent, userController.getUserById);

module.exports = router;
