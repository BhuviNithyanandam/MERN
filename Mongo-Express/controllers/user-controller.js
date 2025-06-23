const User = require('../models/user-model');
const Post = require('../models/post-model');

// Create User
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.json(result);
};

// Get All Users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get User by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Update User
exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete User
exports.deleteUser = async (req, res) => {
  console.log('id-->',req.params.id);
  const user = await User.findByIdAndDelete(req.params.id);
  console.log('user--->',user);
  res.json({ message: "User deleted" });
};

// Create Post for a User
exports.createPost = async (req, res) => {
  const post = new Post({
    ...req.body,
    user: req.params.userId
  });
  const result = await post.save();
  res.json(result);
};

// Get Posts of a User with .populate()
exports.getUserPosts = async (req, res) => {
  const posts = await Post.find({ user: req.params.userId }).populate('user', 'name email');
  res.json(posts);
};

