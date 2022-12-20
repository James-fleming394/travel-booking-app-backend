const express = require('express');
const controlHotel = require('../controllers/hotel.js');
const { verifyAdmin } = require("../utility/verifyToken.js");

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, controlHotel.createHotel);

//UPDATE
router.put("/:id", verifyAdmin, controlHotel.updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, controlHotel.deleteHotel);

//GET
router.get("/find/:id", controlHotel.getHotel);

//GET ALL

router.get("/", controlHotel.getHotels);
router.get("/countByCity", controlHotel.countByCity);
router.get("/countByType", controlHotel.countByType);
router.get("/room/:id", controlHotel.getHotelRooms);



module.exports = router;