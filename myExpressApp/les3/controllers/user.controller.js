module.exports = {
	getAllUsers: (req, res) => {
		res.json([ { name: 'Anton' } ]);
	},
	createUser: (req, res) => {
		res.json('success');
	},

	deleteUserById: (req, res) => {
		res.status(204).json(req.params.userId);
	},
	getUserById: (req, res) => {
		res.json(req.params.userId);
	}
};
