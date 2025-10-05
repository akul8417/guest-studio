const express = require('express');
const router = express.Router();
const Host = require('../models/hostModel.js');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { email } = req.body;

    const existingHost = await Host.findOne({ email });
    if (existingHost) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const host = new Host(req.body);
    const result = await host.save();

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Host login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find host by email
        const host = await Host.findOne({ email });
        if (!host) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Check password
        if (password !== host.password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: host._id }, process.env.JWT_SECRET);

        res.status(200).json({
            message: 'Login successful',
            token,
            host: {
                id: host._id,
                name: host.name,
                email: host.email,
                city: host.city
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Get all hosts
router.get('/getall', async (req, res) => {
    try {
        const hosts = await Host.find({}, { password: 0 }); // Exclude password field
        res.status(200).json(hosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Get host by ID
router.get('/getbyid/:id', async (req, res) => {
    try {
        const host = await Host.findById(req.params.id, { password: 0 }); // Exclude password
        if (!host) {
            return res.status(404).json({ error: 'Host not found' });
        }
        res.status(200).json(host);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Update host profile
router.put('/update/:id', async (req, res) => {
    try {
        // Don't allow email updates to prevent duplicates
        if (req.body.email) {
            delete req.body.email;
        }

        const host = await Host.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).select('-password'); // Exclude password from response

        if (!host) {
            return res.status(404).json({ error: 'Host not found' });
        }
        res.status(200).json(host);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Delete host account
router.delete('/delete/:id', async (req, res) => {
    try {
        const host = await Host.findByIdAndDelete(req.params.id);
        if (!host) {
            return res.status(404).json({ error: 'Host not found' });
        }
        res.status(200).json({ message: 'Host account deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Search hosts by city
router.get('/search/city/:city', async (req, res) => {
    try {
        const hosts = await Host.find({ 
            city: { $regex: new RegExp(req.params.city, 'i') }
        }, { password: 0 }); // Exclude password
        res.status(200).json(hosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;