
var csv = require('csv');

var obj = csv();

var dataInfo = [
    ['101', 'MS', 100000],
    ['102', 'LS', 80000],
    ['103', 'TS', 60000],
    ['104', 'VB', 200000],
    ['105', 'PB', 180000],
    ['106', 'AB', 160000]
];
 

obj.from.array(dataInfo).to.path('../datafile/datainfo.csv');