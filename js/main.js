"use strict";
var csv = require('csv');
var fs = require('fs');
fs.createReadStream('./data/data.csv')
    .pipe(csv.parse())
    //	.pipe(csv.transform (function(record){
    //                return record.map(function(value){
    //                  return value.toUpperCase()
    //              })}))
    .pipe(csv.stringify())
    .pipe(process.stdout);
//# sourceMappingURL=main.js.map