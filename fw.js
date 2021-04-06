const events = require('events'),
  util = require('util');
const path = require('path');
var dateFormat = require('dateformat');

const fs = require('fs');
fs.watch('./watch', function (event, filename) {
  if (event == 'change') {
    var dateStr = dateFormat(new Date(), 'dd-mm-yyyy_h-MM');
    var fileNameObject = path.parse(filename);
    const processedFile = './watch/' + fileNameObject.name + '_' + dateStr + fileNameObject.ext;
    try {
      fs.renameSync('./watch/' + filename, processedFile);
    } catch (e) {}
  }
});
