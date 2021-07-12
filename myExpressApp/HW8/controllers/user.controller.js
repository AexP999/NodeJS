const { emailActions, responseCodesEnum } = require('../constants');
const { errorMessages } = require('../errors');
const { mailService } = require('../services');
const {
  passwordHasher,
  fileDirCreator,
  userNormalizeHelper
} = require('../helpers');
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
      const {
        images,
        body: {
          email,
          name,
          password,
        }
      } = req;

      let { avatar } = req;

      if (!avatar) {
        [avatar] = images;
      }

      const hashedPassword = await passwordHasher.hash(password);

      const newUser = await User.create({ ...req.body, password: hashedPassword });

      const { _id } = newUser;

      if (avatar) {
        // console.log('avatar.name', avatar.name, '_id', _id);
        const { totalPath, imagePath } = await fileDirCreator.fileDC(avatar.name, _id, 'users');

        await avatar.mv(totalPath);

        await User.updateOne({ _id }, { avatar: imagePath });
      }

      // await mailService.sendMail(email, emailActions.ACCOUNT_CREATED, { userName: name });

      const nolmalizedUser = userNormalizeHelper.userNormalizator(newUser.toJSON());

      res.status(responseCodesEnum.CREATED).json(nolmalizedUser);
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
