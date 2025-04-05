const express = require('express');
const router = express.Router();
const { contactMessage } = require('../controllers/contactController');

router.post('/', contactMessage);

module.exports = router;
