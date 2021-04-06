const events = require('events'),
  util = require('util');
const path = require('path');
var dateFormat = require('dateformat');

const fs = require('fs');
fs.watch('./watch', function (event, filename) {
  if (event == 'change') {
    var day = dateFormat(new Date(), 'dd-mm-yyyy_h-MM');
    var fn = path.parse(filename);
    const processedFile = './watch/' + fn.name + '_' + day + fn.ext;
    try {
      fs.renameSync('./watch/' + filename, processedFile);
    } catch (e) {}
  }
});
