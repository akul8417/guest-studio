const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'users', required: true },
    checkIn: { type: Date },
    checkOut: { type: Date },
    MobileNo: { type: Number },
    guest: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('booking', mySchema);