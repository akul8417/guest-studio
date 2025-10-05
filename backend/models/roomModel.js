const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Elite Haven HOTEL'],
        trim: true
    },
    roomName: {
        type: String,
        required: [true, 'Room name is required']
    },
    roomType: { 
        type: String,
        required: [true, 'Room type is required']
    },
    priceperNight: {
        type: Number,
        required: [true, 'Price per night is required']
    },
    address: {
        type: String,
        required: [true, 'Hotel address is required']
    },
    city: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
    }
    
}, { timestamps: true 
    

    
});

// Update the updatedAt timestamp before saving
hotelSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;