const express = require('express');
const router = express.Router();

router.get('/test', function(req, res) {
  res.send({ test: "working" });
})

module.export = router;