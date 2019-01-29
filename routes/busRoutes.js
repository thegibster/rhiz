const express = require("express"),
      router = express.Router();
    //   Business = ("../models/business")

// router.get('/', (req, res)=>{

// })

router.post('/create', (req, res)=> {
    res.send(`Hello from "/business/create" route`)
});

module.exports = router;