const express = require('express');

const router = express.Router();

router.post('/newsLetter', (req, res) => {
  console.log("What are the query params", req.query, "Body?", req.body);
  res.sendStatus(200)
})
router.post('/model_sign_up', (req, res) => {
  console.log(' WHAT IS OUR REQ on model_sign_up????', req.body);
})
module.exports = router;
