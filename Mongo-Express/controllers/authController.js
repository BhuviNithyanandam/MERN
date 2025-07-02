const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// POST /api/auth/register

const register = async (req, res) => {
    const { name, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ name });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Save new user
      const newUser = new User({ name, password: hashedPassword });
      await newUser.save();
  
      // Auto-login: Generate JWT token
      const token = jwt.sign(
        { id: newUser._id, name: newUser.name },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      // Return token with success message
      res.status(201).json({
        message: 'User registered and logged in successfully',
        token,
      });
  
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };


// POST /api/auth/login
const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) return res.status(400).json({ message: 'Invalid credentials - no registered user' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials - wrong password' });

    const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    console.log("error--->",err);
    res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = { register, login };
