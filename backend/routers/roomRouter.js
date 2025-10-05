const express = require('express');
const router = express.Router();
// const Hotel = require('../models/hotelModel');
const Room = require('../models/roomModel');


// Create a new room
router.post('/add', async (req, res) => {
    try {
        const room = new Room(req.body);
        const result = await room.save();
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Get all rooms
router.get('/getall', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Get hotel by ID
router.get('/getbyid/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Update hotel by ID
router.put('/update/:id', async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Delete room by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Search hotels by city
router.get('/search/city/:city', async (req, res) => {
    try {
        const rooms = await Room.find({ 
            city: { $regex: new RegExp(req.params.city, 'i') } 
        });
        res.status(200).json(rooms);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Update room availability
router.patch('/room/:hotelId/:roomNumber', async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        room.isAvailable = req.body.isAvailable;
        await room.save();

        res.status(200).json(room);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;