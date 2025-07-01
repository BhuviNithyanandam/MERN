const Food = require('../models/food-model');

const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

const addMultipleFoodItems = async (req, res) => {
    try {
        const foodArray = req.body;

        if (!Array.isArray(foodArray) || foodArray.length === 0) {
            return res.status(400).json({ error: 'Invalid or empty data array' });
        }

        const insertedItems = await Food.insertMany(foodArray);
        res.status(201).json({ message: 'Food items added successfully', data: insertedItems });
    } catch (error) {
        res.status(500).json({ error: 'Server error while inserting data' });
    }
};

const getFoodById = async (req, res) => {
    try {
        const foodItem = await Food.findById(req.params.id);

        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        res.json(foodItem);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = { getAllFood, addMultipleFoodItems, getFoodById };
