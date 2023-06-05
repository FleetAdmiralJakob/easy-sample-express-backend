const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (Buffer.byteLength(password, 'utf8') > 72) {
    return res.status(400).json({ message: 'Password to long (password must be at most 72 bytes)' });
  }
  try {
    const userData = await authService.register({ email, password });
    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

module.exports = router;
