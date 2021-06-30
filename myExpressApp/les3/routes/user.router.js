const router = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.delete('/:userId', userController.deleteUserById);

router.put('/:userId', userController.updateUserById);

router.get('/:userId', userMiddleware.checkIsUserPresent, userController.getUserById);

module.exports = router;
