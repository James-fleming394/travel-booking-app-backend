const express = require('express');
const controlHotel = require('../controllers/hotel.js');

const router = express.Router();

//GET ALL

router.get('/', controlHotel.getAllHotels);

//GET 

router.get('/:id', controlHotel.getHotel);

//CREATE 

router.post('/', controlHotel.createHotel);

//UPDATE 

router.put('/:id', controlHotel.updateHotel);

//DELETE

router.delete('/:id', controlHotel.deleteHotel);



module.exports = router;