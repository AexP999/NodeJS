const { userService } = require('../services');

module.exports = {
	getAllUsers: (req, res) => {
		const users = userService.findAll();

		res.json(users);
	},

	createUser: (req, res) => {
		userService.insertUser(req.body);

		res.json('success');
	},

	deleteUserById: (req, res) => {
		const userId = Number(req.params.userId);
		userService.deleteSomeUserById(userId);
		res.json('deleted successfull');
	},

	getUserById: (req, res) => {
		const { user } = req;

		res.json(user);
	},

	updateUserById: (req, res) => {
		const { user } = req;

		res.status(204).json(user);
	}
};
