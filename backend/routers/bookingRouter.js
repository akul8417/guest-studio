// backend/routers/userRouter.js (CommonJS)
const express = require('express');
const User = require('../models/bookingModel'); // CommonJS model
const jwt = require('jsonwebtoken');


const router = express.Router();


// Signup / Add user
router.post('/add', async (req, res) => {
  try {
    const { name, email, password, city } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password, city });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// Get all users
router.get('/getall', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by email
router.get('/getbyemail/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by ID
router.get('/getbyid/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user
router.put('/update/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete user
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;