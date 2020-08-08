const joi = require('@hapi/joi');

const schema = joi.object({
  file: joi.required(),
  title: joi.string().required().min(5),
  menu: joi.string().required().min(10),
});

module.exports = schema;
