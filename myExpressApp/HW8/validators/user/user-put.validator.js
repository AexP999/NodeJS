const Joi = require('joi');

const { regexp } = require('../../constants');

module.exports = {
  updateUser: Joi.object().keys({
    age: Joi.number().min(12).max(100),
    email: Joi.string().regex(regexp.EMAIL_REGEXP),
    name: Joi.string().required().min(3).max(50)
  })
};
