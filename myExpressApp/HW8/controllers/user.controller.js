const { emailActions, responseCodesEnum } = require('../constants');
const { errorMessages } = require('../errors');
const { mailService } = require('../services');
const { passwordHasher } = require('../helpers');
const { User } = require('../dataBase');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find({});
      res.status(responseCodesEnum.SUCCESS).json(users);
    } catch (error) {
      next(error);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const { password, name, email } = req.body;

      const hashedPassword = await passwordHasher.hash(password);

      const createdUser = await User.create({ ...req.body, password: hashedPassword });

      await mailService.sendMail(email, emailActions.ACCOUNT_CREATED, { userName: name });

      res.status(responseCodesEnum.CREATED).json(createdUser);
    } catch (error) {
      next(error);
    }
  },

  deleteUserById: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { name, email } = req.user;

      await User.findByIdAndDelete(userId);

      await mailService.sendMail(email, emailActions.ACCOUNT_DELETED, { userName: name });

      res.status(responseCodesEnum.DELETED_SUCCESSFULL).json(errorMessages.SUCCESSFULLY_DELETED);
    } catch (error) {
      next(error);
    }
  },

  getUserById: (req, res, next) => {
    try {
      const { user } = req;
      res.status(responseCodesEnum.SUCCESS).json(user);
    } catch (error) {
      next(error);
    }
  },

  updateUserById: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { name, age, email } = req.body;

      await User.findByIdAndUpdate(userId, { name, age, email }, { new: true });

      await mailService.sendMail(email, emailActions.ACCOUNT_CHANGED, { userName: name });

      res.status(responseCodesEnum.UPDATED_SUCCESSFULL).json(errorMessages.SUCCESSFULLY_UPDATED);
    } catch (error) {
      next(error);
    }
  }
};
