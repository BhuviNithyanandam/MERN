const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user-routes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // Middleware to parse JSON

app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Express + Mongoose CRUD API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
