const express = require('express');
const router = express.Router();

router.get('/facebook', function(req, res) {
  res.send({ test: "working" });
})

module.export = router;