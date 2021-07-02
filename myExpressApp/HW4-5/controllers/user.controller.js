const { responseCodesEnum } = require('../constants');
const { User } = require('../dataBase');
const { passwordHasher } = require('../helpers');

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
      const { password } = req.body;
      const hashedPassword = await passwordHasher.hash(password);

      const createdUser = await User.create({ ...req.body, password: hashedPassword });

      res.status(responseCodesEnum.CREATED).json(createdUser);
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
  },

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
      // eslint-disable-next-line no-console
      console.log(e);
      res.json(e.message);
    }
  }
};
