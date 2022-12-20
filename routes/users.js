const express = require('express');
const userControls = require('../controllers/user.js');
const { verifyAdmin, verifyToken, verifyUser } = require('../utility/verifyToken.js');


const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, userControls.updateUser);

//DELETE
router.delete("/:id", verifyUser, userControls.deleteUser);

//GET
router.get("/:id", verifyUser, userControls.getUser);

//GET ALL
router.get("/", verifyAdmin, userControls.getUsers);

module.exports = router;