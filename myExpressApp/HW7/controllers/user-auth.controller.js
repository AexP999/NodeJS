const { authService } = require('../services');
const { constants: { AUTHORIZATION }, emailActions } = require('../constants');
const { errorMessages } = require('../errors');
const { mailService } = require('../services');
const { OAuth } = require('../dataBase');
const { responseCodesEnum } = require('../constants');

module.exports = {
  userLogin: async (req, res, next) => {
    try {
      const { user, user: { _id, email, name } } = req;

      await mailService.sendMail(email, emailActions.WELCOME, { userName: name });

      const tokens = authService.generateTokenPair();

      await OAuth.create({
        ...tokens,
        user: _id
      });

      res.json({ ...tokens, user });
    } catch (e) {
      next(e);
    }
  },

  userLogout: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      await OAuth.deleteOne({ access_Token: token });

      res.status(responseCodesEnum.DELETED_SUCCESSFULL).json(errorMessages.SUCCESSFULLY_REMOVED.message);
    } catch (e) {
      next(e);
    }
  },

  userRefresh: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      await OAuth.deleteOne({ refresh_Token: token });

      const updatedTokens = authService.generateTokenPair();

      const { _id } = req.user;

      await OAuth.create({
        ...updatedTokens,
        user: _id
      });

      res.json({
        ...updatedTokens,
        user: req.user
      });
    } catch (e) {
      next(e);
    }
  }
};
