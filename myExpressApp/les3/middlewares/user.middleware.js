const userService = require('../services/user.service');

module.exports = {
	checkIsUserPresent: (req, res, next) => {
		const { userId } = req.params;

		const userById = userService.findOneById(userId);

		if (!userById) {
			throw new Error('user not found');
		}

		req.user = userById;

		next();
	}
};
