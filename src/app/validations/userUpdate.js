const joi = require('@hapi/joi');

const schema = joi.object({
  name: joi.string().required().min(3),
  surname: joi.string().required().min(3),
  status: joi.number().integer().min(0).max(3),
});

module.exports = schema;
