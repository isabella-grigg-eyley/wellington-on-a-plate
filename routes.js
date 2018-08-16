const express = require('express');
const router = express.Router();
const fs = require('fs');

let data = require('./data.json');

router.get('/', (req, res) => {
    res.send("mmm burgers");
})

module.exports = router;