const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: 'User registered!', user });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed. Email may already exist.' });
  }
};

  