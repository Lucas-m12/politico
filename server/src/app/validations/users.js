const joi = require('@hapi/joi');

const schema = joi.object({
  name: joi.string().required().min(3),
  surname: joi.string().required().min(3),
  phone: joi.number().integer().required(),
  password: joi.string().required(),
  confirm_password: joi.ref('password'),
});

module.exports = schema;
