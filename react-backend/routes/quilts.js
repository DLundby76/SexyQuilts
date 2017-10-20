const express = require('express');

const quiltRouter = express.Router()
const Quilt = require('../db/models/quilts');

quiltRouter.get('/', (req, res) => {
  console.log(' We should hit the quilts routere', );
  Quilt.find()
  .then((results) => {
    console.log(' DO WE HAVE RESULTS???', results);
    res.json({results});
  })
  .catch((err) => {
    console.log('What was our err', err);
  })
  // res.sendStatus(200);
})

module.exports = quiltRouter;
