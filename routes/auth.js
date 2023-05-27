const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await authService.register({ email, password });
    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

module.exports = router;