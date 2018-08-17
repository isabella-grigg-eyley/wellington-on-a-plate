const express = require('express');
const router = express.Router();
const fs = require('fs');

let data = require('./data.json');
let burgerList = data["burgers"]

router.get('/', (req, res) => {
    let emptyBurger = {
        "id": 0,
        "restaurant": "none",
        "name": "none",
        "image": "",
        "description": "none",
        "price": "2000000",
        "rating" : "" 
      }
    res.render('./home', emptyBurger)
})

router.post('/', (req, res) => {
    let burgerID = Number(req.body["ID"]);

    console.log("post req received")

    let burger = burgerList.find((element) => {
        return (burgerID === element["id"])
    })
    console.log(burger)
    res.render('./home', burger);
})

module.exports = router;