const express = require('express');
const Hotel = require('../models/Hotel.js');
const Room = require('../models/Room.js');
const { verifyAdmin } = require('../utility/verifyToken.js');
const roomControls = require('../controllers/room.js');

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, roomControls.createRoom);

//UPDATE
router.put("/availability/:id", roomControls.updateRoomAvailability);
router.put("/:id", verifyAdmin, roomControls.updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, roomControls.deleteRoom);

//GET

router.get("/:id", roomControls.getRoom);

//GET ALL

router.get("/", roomControls.getRooms);

module.exports = router;