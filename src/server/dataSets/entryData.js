// Node packages for file system
var fs = require('fs');
var path = require('path');

var filesArray = [];
for (var i = 1; i <= 9999; i++)  filesArray.push('set' + i);
var json = [];
var basePath = "/Users/sandeep/Downloads/New Dataset/newDataset";
function test(fileName) {
    var filePath =  `${basePath}/${fileName}.csv`;
    // Read CSV
    var f = fs.readFileSync(filePath, { encoding: 'utf-8' },
        function (err) { console.log(err); });

    headers = ["Client_ID", "Timestamp_of_Data_Looging", "Maximum_Voltage", "Minimum_Voltage", "Average_Volatage", "Maximum_Current", "Minimum_Current", "Average_Current", "Power"];
    // // Split on row
    f = f.split("\n");
    console.log(f.length - 1);

    for (var j = 0; j < f.length - 1; j++) {
        var d = f[j];
        // Loop through each row
        var row = d.split(",")
        var tmp = {}
        for (var i = 0; i < headers.length - 1; i++) {
            if(headers[i] == 'Timestamp_of_Data_Looging'){
                tmp[headers[i]] = new Date(row[i]);
            }else {
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



filesArray.forEach(test);
console.log(json);
makeRequest(json);

// var outPath = path.join(__dirname, '../test.json');
// // Convert object to string, write json to file
// fs.writeFileSync(outPath, JSON.stringify(json), 'utf8',
//     function (err) { console.log(err); });


function makeRequest(data) {
    try {
        data.Timestamp_of_Data_Looging = new Date(data.Timestamp_of_Data_Looging);
    } catch (err) {
        console.log(err);
    }
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