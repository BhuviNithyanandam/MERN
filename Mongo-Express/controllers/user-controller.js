const User = require('../models/user-model');
const Post = require('../models/post-model');

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
  try {
    const userIdFromToken = req.user.id; // decoded from JWT middleware
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required to update' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userIdFromToken,
      { name },
      { new: true, runValidators: true }
    );

    res.json({
      message: 'User updated successfully',
      user: { name: updatedUser.name },
    });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
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
  const posts = await Post.find({ user: req.params.userId }).populate('user', 'name');
  res.json(posts);
};

