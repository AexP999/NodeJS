const { responseCodesEnum } = require('../constants');
const { User } = require('../dataBase');
const { userAuthValidator } = require('../validators/user');
const { ErrorHandler, errorMessage } = require('../errors');

module.exports = {

  checkUserAuthValidity: (req, res, next) => {
    try {
      const { error } = userAuthValidator.authUser.validate(req.body);

      if (error) {
        throw new Error(error.details[0].message);
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsEmailAbsent: async (req, res, next) => {
    try {
      const { email } = req.body;

      const userByEmail = await User.findOne({ email });

      if (!userByEmail) {
        throw new ErrorHandler(
          responseCodesEnum.AUTH_ERROR,
          errorMessage.WRONG_EMAIL.message,
          errorMessage.WRONG_EMAIL.code
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  }
};
