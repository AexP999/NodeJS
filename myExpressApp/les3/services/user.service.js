const { users } = require('../dataBase');

module.exports = {
	findAll: () => users,

	insertUser: (userObject) => {
		users.push(userObject);
	},

	findOneById: (userId) => users[userId],

	deleteSomeUserById: (userId) => {
		console.log(users);
		users.splice(userId, 1);
		console.log(users);
	}
};
