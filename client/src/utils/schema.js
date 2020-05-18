import Joi from 'joi-browser';

const validateName = (name) => {
  const schema = Joi.string().min(5).label('Name').required();
  return schema.validate(name);
};

const validatePhone = (phone) => {
  const schema = Joi.string()
    .length(10)
    .label('Phone Number')
    .regex(/^\d+$/)
    .required();
  return schema.validate(phone);
};

const validateMail = (email) => {
  const schema = Joi.string().email().label('Email').required();
  return schema.validate(email);
};
export { validateName, validatePhone, validateMail };
