const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const {
  constants: {
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXP_TIME,
    REFRESH_TOKEN_EXP_TIME
  }
} = require('../constants');

const verifyPromise = promisify(jwt.verify);

module.exports = {
  generateTokenPair: () => {
    const access_Token = jwt.sign({}, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXP_TIME });
    const refresh_Token = jwt.sign({}, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXP_TIME });

    return { access_Token, refresh_Token };
  },

  verifyToken: async (token, tokenType = 'access') => {
    const secretTokenWord = tokenType === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;

    await verifyPromise(token, secretTokenWord);
  }
};
