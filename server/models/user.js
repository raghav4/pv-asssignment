const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(5).label('Name').required(),
    phone: Joi.string()
      .length(10)
      .regex(/^\d+$/)
      .label('Phone Number')
      .required(),
    email: Joi.string().email().label('Email').required(),
    address: Joi.string().label('Address').allow('').optional(),
  });

  return schema.validate(user);
};

exports.User = User;
exports.validateAdd = validateUser;
