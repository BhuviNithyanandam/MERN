// server/models/foodModel.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
