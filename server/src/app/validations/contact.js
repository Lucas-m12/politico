const joi = require('@hapi/joi');

const schema = joi.object({
  message: joi.string().required().min(10),
});

module.exports = schema;
