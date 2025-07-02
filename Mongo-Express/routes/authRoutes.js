const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ name: req.user.name });
});

module.exports = router;
