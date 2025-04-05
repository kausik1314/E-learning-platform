const Contact = require('../models/contact.js');

exports.contactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const msg = new Contact({ name, email, subject, message });
    await msg.save();
    res.json({ message: 'Thanks for contacting us!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message.' });
  }
};

  