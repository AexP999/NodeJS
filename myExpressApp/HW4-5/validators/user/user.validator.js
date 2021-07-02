const Joi = require('joi');

const { regExp, userRolesEnum } = require('../../constants');

module.exports = {

  createUser: Joi.object().keys({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().regex(regExp.EMAIL_REGEXP),
    password: Joi.string().min(8).max(256).required(),
    age: Joi.number().min(12).max(2021),
    role: Joi.string().allow(...Object.values(userRolesEnum))
  })

};
