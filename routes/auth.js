const express = require('express');
const controlAuth = require('../controllers/auth.js');

const router = express.Router();

router.post("/register", controlAuth.register);
router.post("/login", controlAuth.login);


module.exports = router;