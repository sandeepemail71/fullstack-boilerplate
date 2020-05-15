const express = require('express');
const { Test } = require('../models')


const router = express.Router();

/**
 * Controllers (route handlers).
 */

// router.use('/v1', require('./v1/giftCard'));

// Health Check
router.post('/v1/setdata', (req, res) => {
  // Test.find({}, function (err, users) {
  //   if (err) return handleError(err);
  //   res.status(200).send(users);

  // });

  var clientData = new Test(Json.parse(req.body));

  // // save model to database
  clientData.save(function (err) {
    if (err) return console.error(err);
    console.log(" saved to collection.");
    res.status(200).send(" saved to bookstore collection.");
  });

});


module.exports = router;