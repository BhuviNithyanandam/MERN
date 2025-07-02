const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user-routes');
const foodRoutes = require('./routes/food-routes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json()); // Middleware to parse JSON

app.use('/api', userRoutes);
app.use('/api/food',foodRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Express + Mongoose CRUD API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
