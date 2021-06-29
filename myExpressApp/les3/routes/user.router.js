const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', (req, res) => {
	res.json([ { name: 'Anton' } ]);
});

router.post('/', userController.getAllUsers);

router.delete('/:userId', userController.deleteUserById);

router.get('/:userId', userController.getUserById);

module.exports = router;
