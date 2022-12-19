const Hotel = require('../models/Hotel');

//GET ALL

const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();

        res.status(200).json(hotels);

    } catch (err) {
        res.status(500).json(err);
    }
};

//GET ONE

const getHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);

        res.status(200).json(hotel);

    } catch (err) {
        res.status(500).json(err);
    }
};

//CREATE HOTEL

const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch (err) {
        res.status(500).json(err);
    }
};

//UPDATE HOTEL 

const updateHotel = async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body }, 
            { new: true });
        res.status(200).json(updatedHotel);

    } catch (err) {
        res.status(500).json(err);
    }
};

//DELETE HOTEL

const deleteHotel = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json("Hotel Deleted");

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllHotels,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel
}