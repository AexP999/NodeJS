const { responseCodesEnum } = require('../constants');
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
      await User.create(req.body);
      res.status(responseCodesEnum.NO_CONTENT).json('created successfull');
    } catch (error) {
      next(error);
    }
  },

  deleteUserById: async (req, res, next) => {
    try {
      const { userId } = req.params;
      await User.findByIdAndDelete(userId);
      res.status(responseCodesEnum.DELETED_SUCCESSFULL).json('deleted successfull');
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
      const userEmail = req.body.email;
      const userAge = req.body.age;
      const userName = req.body.name;
      const updatedUser = { name: userName, age: userAge, email: userEmail };

      await User.findByIdAndUpdate(userId, updatedUser, { new: true });
      res.status(responseCodesEnum.UPDATED_SUCCESSFULL).json('update successfull');
    } catch (error) {
      next(error);
    }
  }
};
