const { errorMessages } = require('../errors');

const { responseCodesEnum } = require('../constants');
const { OAuth } = require('../dataBase');
const { authService } = require('../services');

module.exports = {
  userLogin: async (req, res, next) => {
    try {
      const { user, user: { _id } } = req;

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
      const token = req.get('Authorization');

      await OAuth.remove({ access_Token: token });

      res.status(responseCodesEnum.DELETED_SUCCESSFULL).json(errorMessages.SUCCESSFULLY_REMOVED.message);
    } catch (e) {
      next(e);
    }
  },

  userRefresh: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

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
