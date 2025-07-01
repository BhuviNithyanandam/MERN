const express = require('express');
const router = express.Router();
const { getAllFood , addMultipleFoodItems, getFoodById} = require('../controllers/food-controller');

router.get('/', getAllFood);
router.post('/addManyFoods', addMultipleFoodItems); 
router.get('/:id', getFoodById);

module.exports = router;
