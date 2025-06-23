const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Post routes
router.post('/users/:userId/posts', userController.createPost);
router.get('/users/:userId/posts', userController.getUserPosts);


module.exports = router;
