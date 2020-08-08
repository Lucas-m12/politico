const joi = require('@hapi/joi');

const schema = joi.object({

  title: joi.string().required().trim(),
  description: joi.string().required().trim(),

});

module.exports = schema;
