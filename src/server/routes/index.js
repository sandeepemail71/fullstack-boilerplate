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

    //   var clientData = new Test(Json.parse(req.body));
    Test.insertMany(Json.parse(req.body), function (err) {
        if (err) return console.error(err);
        console.log(" saved to collection.");
        res.status(200).send(" saved to bookstore collection.");
    })

    // // save model to database
    //   clientData.save(function (err) {
    //     if (err) return console.error(err);
    //     console.log(" saved to collection.");
    //     res.status(200).send(" saved to bookstore collection.");
    //   });

});

router.get('/v1/getData', (req, res) => {
    var startDate = new Date(req.query.startDate);
    var endDate = new Date(req.query.endDate);
    console.log(startDate, endDate);
    var dataProjection = { 
        'Timestamp_of_Data_Looging': true,
        'Power': true
    };

    Test.find({ Client_ID: 'Client 1', Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection, function (err, data) {
        if (err) return handleError(err);
        res.status(200).send(data.map(ele => ele.Power ));

    });

});


module.exports = router;