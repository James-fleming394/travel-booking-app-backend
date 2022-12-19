const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Auth Endpoint")
})

router.get("/register", (req, res) => {
    res.send("Register Endpoint")
})


module.exports = router;