const bcrypt = require('bcrypt');
const { ErrorHandler, errorMessages } = require('../errors');
const { responseCodesEnum } = require('../constants');

module.exports = {
  compare: async (hashedPassword, password) => {
    const isPasswordMatched = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatched) {
      throw new ErrorHandler(
        // eslint-disable-next-line max-len
        responseCodesEnum.WRONG_PASSWORD_OR_EMAIL, errorMessages.WRONG_EMAIL_OR_PASSWORD.message, errorMessages.WRONG_EMAIL_OR_PASSWORD.code
      );
    }
  },
  hash: (password) => bcrypt.hash(password, 10)
};
