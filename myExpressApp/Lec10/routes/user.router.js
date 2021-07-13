const router = require('express').Router();

const { userController } = require('../controllers');
const {
  userMiddleware,
  userAuthMiddleware,
  fileMiddleware
} = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/',
  fileMiddleware.checkFilesForSizeAndType,
  userMiddleware.checkUserValidity,
  userMiddleware.checkIsEmailExist,
  userController.createUser);

router.delete('/:userId',
  userAuthMiddleware.checkingAccessToken,
  userMiddleware.checkIsUserPresent,
  userController.deleteUserById);

router.put('/:userId',
  userAuthMiddleware.checkingAccessToken,
  userMiddleware.checkUserUpdateValidity,
  userMiddleware.checkIsUserPresent,
  userController.updateUserById);

router.get('/:userId', userMiddleware.checkIsUserPresent, userController.getUserById);

module.exports = router;
