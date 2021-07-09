const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/',
  userMiddleware.checkUserValidity,
  userMiddleware.checkIsEmailExist,
  userController.createUser);

router.delete('/:userId', userMiddleware.checkIsUserPresent, userController.deleteUserById);

router.put('/:userId',
  userMiddleware.checkUserUpdateValidity,
  userMiddleware.checkIsUserPresent,
  userController.updateUserById);

router.get('/:userId', userMiddleware.checkIsUserPresent, userController.getUserById);

module.exports = router;
