const express = require('express');

const quiltRouter = express.Router()
const Quilt = require('../db/models/quilts');

quiltRouter.get('/', (req, res) => {
  Quilt.find()
  .then((results) => {
    res.json({results});
  })
  .catch((err) => {
    console.log('What was our err', err);
  })
  // res.sendStatus(200);
})

module.exports = quiltRouter;
