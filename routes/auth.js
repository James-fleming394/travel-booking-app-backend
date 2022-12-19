const express = require('express');
const controlAuth = require('../controllers/auth.js');

const router = express.Router();

router.post("/register", controlAuth.register);


module.exports = router;