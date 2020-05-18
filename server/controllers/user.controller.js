const { User, validateAdd } = require('../models/user');

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('No user found');

  return res.status(200).send(user);
};

exports.addUser = async (req, res) => {
  const { error } = validateAdd(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, phone, email, address } = req.body;

  let user = await User.findOne({
    $or: [{ email }, { phone }],
  });
  if (user) {
    return res
      .status(400)
      .send('User already exists with the provided email or phone number');
  }

  user = new User({
    name,
    phone,
    email,
    address,
  });

  await user.save();
  return res.status(200).send(user);
};

exports.updateUserDetails = async (req, res) => {
  const { name, email, phone, address } = req.body;
  const user = await User.findOneAndUpdate(
    { _id: req.params.id },
    { name, email, phone, address },
    { new: true },
  );

  if (!user) return res.status(404).send('No user found');

  return res.status(200).send(user);
};
