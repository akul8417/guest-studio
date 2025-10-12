// backend/routers/userRouter.js (CommonJS)
const express = require('express');
const Model = require('../models/bookingModel'); // CommonJS model
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middlewares/auth');


const router = express.Router();


// Signup / Add user
router.post('/add', verifyToken, async (req, res) => {
  try {
    req.body.user = req.user._id;
    console.log(req.body);
    const savedData = await new Model(req.body).save();
    res.status(201).json(savedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});


// Get all users
router.get('/getall', async (req, res) => {
  try {
    const users = await Model.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by email
router.get('/getbyemail/:email', async (req, res) => {
  try {
    const user = await Model.findOne({ email: req.params.email });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get user by ID
router.get('/getbyid/:id', async (req, res) => {
  try {
    const user = await Model.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user
router.put('/update/:id', async (req, res) => {
  try {
    const updatedUser = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete user
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedUser = await Model.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;