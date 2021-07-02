// const { responseCodesEnum } = require('../constants');
const { User } = require('../dataBase');
const { passwordHasher } = require('../helpers');

module.exports = {
  authUser: async (req, res) => {
    try {
      const { password, email } = req.body;

      const userByEmail = await User.findOne({ email }).select('+password');

      if (!userByEmail) {
        throw new Error('No email');
      }

      await passwordHasher.compare(userByEmail.password, password);

      res.json('OK');
    } catch (e) {
      res.json(e.message);
    }
  }
};
