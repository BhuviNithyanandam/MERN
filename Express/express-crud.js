// Express CRUD Example

const express = require('express');
const app = express();
const PORT = 3003;

// Middleware to parse JSON
app.use(express.json());

// In-memory data store
let users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 25 }
];

// Mount the admin route
const adminRoutes = require('./routes/admin-routes');
app.use('/admin', adminRoutes);

// GET all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET single user by name
app.get('/users/:name', (req, res) => {
  const user = users.find(u => u.name === req.params.name);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

// POST create new user
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) return res.status(400).json({ message: 'Name and age are required' });
  users.push({ name, age });
  res.status(201).json({ message: 'User created', users });
});

// PUT update user by name
app.put('/users/:name', (req, res) => {
  const userIndex = users.findIndex(u => u.name === req.params.name);
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
  const { name, age } = req.body;
  users[userIndex] = { name: name || users[userIndex].name, age: age || users[userIndex].age };
  res.status(200).json({ message: 'User updated', user: users[userIndex] });
});

// DELETE user by name
app.delete('/users/:name', (req, res) => {
  const userIndex = users.findIndex(u => u.name === req.params.name);
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
  users.splice(userIndex, 1);
  res.status(200).json({ message: 'User deleted', users });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
