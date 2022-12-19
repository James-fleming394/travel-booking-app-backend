const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        city: {type: String, required: true},
        address: {type: String, required: true},
        photos: [String],
        desc: {type: String, required: true},
        rating: {type: Number, min: 0, max: 5},
        rooms: [String],
        cheapestPrice: {type: Number, required: true},
        featured: {type: Boolean, default: false},
    },
    { timestamps: true }
)

const Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel;