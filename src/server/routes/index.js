const express = require('express');
const { Test } = require('../models')


const router = express.Router();

/**
 * Controllers (route handlers).
 */

// router.use('/v1', require('./v1/giftCard'));

// Health Check
router.post('/v1/setdata', (req, res) => {
    var clientData = new Test(Json.parse(req.body));
    Test.insertMany(clientData, function (err) {
        if (err) return console.error(err);
        console.log(" saved to collection.");
        res.status(200).send(" saved to bookstore collection.");
    })
});


router.post('/v1/getAverageVoltage', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Average_Volatage': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Average_Volatage)
        };
        res.status(200).send(tmp);        
    })
});


router.post('/v1/getMaximumVoltage', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Maximum_Voltage': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Maximum_Voltage)
        };
        res.status(200).send(tmp);        
    })
});

router.post('/v1/getMinimumVoltage', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Minimum_Voltage': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Minimum_Voltage)
        };
        res.status(200).send(tmp);        
    })
});

router.post('/v1/getAverageCurrent', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Average_Current': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Average_Current)
        };
        res.status(200).send(tmp);        
    })
});

router.post('/v1/getMaximumCurrent', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Maximum_Current': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Maximum_Current)
        };
        res.status(200).send(tmp);        
    })
});

router.post('/v1/getMinimumCurrent', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Minimum_Current': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Minimum_Current)
        };
        res.status(200).send(tmp);        
    })
});

router.post('/v1/getPowerConsumption', (req, res) => {
    let data = req.body;
    console.log(data, "===============data");
    try {
        var startDate = new Date(data.startDate);
        var endDate = new Date(data.endDate);
        var clientId = (data.clientId)
    } catch (err) {
        console.log("date parsing error======", err);
    }

    var dataProjection = {
        'Timestamp_of_Data_Looging': true,
        'Minimum_Current': true
    };

    const query = Test.find({ Client_ID: clientId, Timestamp_of_Data_Looging: { $gt: startDate, $lt: endDate } }, dataProjection);

    query.exec(function (err, data) {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        };
        var tmp = {
            "Time": data.map(ele => ele.Timestamp_of_Data_Looging),
            "data": data.map(ele => ele.Minimum_Current)
        };
        res.status(200).send(tmp);        
    })
});


module.exports = router;