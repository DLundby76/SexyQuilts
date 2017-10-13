const express = require('express');
const request = require('request');
const photoRouter = express.Router();


photoRouter.get('/instagram', (req, res) => {
  console.log('hit instagram route');

  const options = { method: 'GET',
    url: 'https://api.instagram.com/v1/users/self/media/recent/',
    qs: { access_token: '5842795679.1677ed0.0fd67dfb01bb411c9d6cff65d53c413e' },
    headers:
     {'cache-control': 'no-cache' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(body)

    console.log(body);
  });

})

module.exports = photoRouter;
