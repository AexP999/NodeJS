const { authService } = require('../services');
const { errorMessages, ErrorHandler } = require('../errors');
const { responseCodesEnum } = require('../constants');
const { passwordHasher } = require('../helpers');
const { constants: { TOKEN_TYPE } } = require('../constants');
const { userAuthValidator } = require('../validators/user');
const { User, OAuth } = require('../dataBase');

module.exports = {

  checkUserAuthValidity: (req, res, next) => {
    try {
      const { error } = userAuthValidator.authUser.validate(req.body);

      if (error) {
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          error.details[0].message,
          errorMessages.WRONG_DATA.code
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  checkPassAndEmail: async (req, res, next) => {
    try {
      const { password, email } = req.body;
      const user = await User.findOne({ email }).select('+password');

      req.user = user;

      if (!user) {
        throw new ErrorHandler(
          // eslint-disable-next-line max-len
          responseCodesEnum.WRONG_PASSWORD_OR_EMAIL,
          errorMessages.WRONG_EMAIL_OR_PASSWORD.message,
          errorMessages.WRONG_EMAIL_OR_PASSWORD.code
        );
      }

      await passwordHasher.compare(user.password, password);

      next();
    } catch (e) {
      next(e);
    }
  },

  checkingAccessToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
        throw new ErrorHandler(
          responseCodesEnum.AUTH_ERROR,
          errorMessages.WRONG_TOKEN.message,
          errorMessages.WRONG_TOKEN.code
        );
      }

      await authService.verifyToken(token);

      const tokenObj = await OAuth.findOne({ access_Token: token });

      if (!tokenObj) {
        throw new ErrorHandler(
          responseCodesEnum.AUTH_ERROR,
          errorMessages.WRONG_TOKEN.message,
          errorMessages.WRONG_TOKEN.code
        );
      }
      req.user = tokenObj.user;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkingRefreshToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
        throw new ErrorHandler(
          responseCodesEnum.AUTH_ERROR,
          errorMessages.NO_TOKEN.message,
          errorMessages.NO_TOKEN.code
        );
      }

      await authService.verifyToken(token, TOKEN_TYPE.REFRESH);

      const tokenObj = await OAuth.findOne({ refresh_Token: token });

      if (!tokenObj) {
        throw new ErrorHandler(
          errorMessages.WRONG_TOKEN.code,
          errorMessages.WRONG_TOKEN.message
        );
      }

      req.user = tokenObj.user;

      next();
    } catch (e) {
      next(e);
    }
  }
};
