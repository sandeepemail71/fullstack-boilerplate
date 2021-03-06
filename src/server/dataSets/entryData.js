// Node packages for file system
var fs = require('fs');
var path = require('path');

var json = [];
var basePath = "/Users/sandeep/Documents/data-csv";
function test(fileName) {
    var filePath = `${basePath}/${fileName}.csv`;
    // Read CSV
    var f = fs.readFileSync(filePath, { encoding: 'utf-8' },
        function (err) { console.log(err); });

    headers = ["Client_ID", "Timestamp_of_Data_Looging", "Maximum_Voltage", "Minimum_Voltage", "Average_Volatage", "Maximum_Current", "Minimum_Current", "Average_Current", "Power"];
    // // Split on row
    f = f.split("\n");

    for (var j = 0; j < f.length - 1; j++) {
        var d = f[j];
        // Loop through each row
        var row = d.split(",")
        var tmp = {}
        for (var i = 0; i < headers.length - 1; i++) {
            if (headers[i] == 'Timestamp_of_Data_Looging') {
                tmp[headers[i]] = new Date(row[i]);
            } else if (headers[i] == 'Client_ID') {
                tmp[headers[i]] = row[i].split('').splice(7).join('');
            } else {
                tmp[headers[i]] = row[i];
            }
        }
        tmp[headers[i]] = row[i].split('\r')[0];
        // temp2[row[0]] = temp1;
        // Add object to list
        json.push(tmp);
        // makeRequest(tmp);
    }
}



var filesArray = [];
for (var i = 1; i <= 10000; i++)  filesArray.push('set' + i);
filesArray.forEach(test);
var outPath = path.join(__dirname, './test.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
    function (err) { console.log(err); });

filesArray = [];
json = [];
for (var i = 10001; i <= 20000; i++)  filesArray.push('set' + i);
filesArray.forEach(test);
var outPath = path.join(__dirname, './test1.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
    function (err) { console.log(err); });

filesArray = [];
json = [];
for (var i = 20001; i <= 30000; i++)  filesArray.push('set' + i);
filesArray.forEach(test);
var outPath = path.join(__dirname, './test2.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
    function (err) { console.log(err); });


filesArray = [];
json = [];
for (var i = 30001; i <= 40000; i++)  filesArray.push('set' + i);
filesArray.forEach(test);
var outPath = path.join(__dirname, './test3.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
    function (err) { console.log(err); });


filesArray = [];
json = [];
for (var i = 40001; i <= 50000; i++)  filesArray.push('set' + i);
filesArray.forEach(test);
var outPath = path.join(__dirname, './test4.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
    function (err) { console.log(err); });






function makeRequest(data) {
    const axios = require('axios');
    axios
        .post('http://localhost:8080/api/v1/setdata', data)
        .then(res => {
            console.log(`statusCode: ${res.statusCode}`)
        })
        .catch(error => {
            console.error("===================error", error)
        });
}