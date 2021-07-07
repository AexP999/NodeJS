const Joi = require('joi');

const { regexp } = require('../../constants');

module.exports = {
  authUser: Joi.object().keys({
    email: Joi.string().regex(regexp.EMAIL_REGEXP).required(),
    password: Joi.string().min(2).max(50).required()
  })
};
