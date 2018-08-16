const express = require('express');
const router = express.Router();
const fs = require('fs');

let data = require('./data.json');
let burgerList = data["burgers"]

router.get('/', (req, res) => {
    //render home page with sidebar invisible by default
    //res.send('burgers mmmm');
    //res.send(burgerList[0]["name"])
    res.render('./home')
})

router.post('/', (req, res) => {
    console.log("post req received")
    res.send(req.body);
    //let burgerID = [req.body["id"]]
    //burgerID = "1"

    //req.body === {"id": "1"}
    //get ID of burger clicked,
    //find burger info in data file
    //render page with burger info sent to it
    //let burger =  data["burgers"].find((element) => {
        //return burgerID == element.id
    
})

module.exports = router;