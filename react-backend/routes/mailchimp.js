const express = require('express');
const mailchimp = require('../mailchimp/index');

const router = express.Router();

router.post('/newsLetter', (req, res) => {
  console.log("What are the query params", req.query, "Body?", req.body);
  mailchimp.newsLetterSignup(req.body)
  .then((result) => {
    console.log('mailchimp success', result);
    res.sendStatus(200)
  })
  .catch((err) => {
    res.send(500);
    console.log('error', err);
  })
})
router.post('/modelSignup', (req, res) => {
  console.log(' WHAT IS OUR REQ on model_sign_up????', req.body);
  mailchimp.modelSignup(req.body)
  .then((result) => {
    console.log('mailchimp success', result);
    res.sendStatus(200)
  })
  .catch((err) => {
    res.send(500);
    console.log('error', err);
  })
})
module.exports = router;
