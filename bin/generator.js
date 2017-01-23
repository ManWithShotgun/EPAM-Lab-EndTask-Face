'use strict';

var fs         = require('fs');
var path       = require('path');
var util       = require('util');

function generateData() {

  var comments = [];

  for (var i = 0; i < 25; i++) {
    comments.push({
      id           : i,
      pricePer     : i*7+10,
      name         : util.format('Camera%s', i),
      img          : 'dist/public/camera-1.jpg',
      MP           : 24,
      description  : util.format('Camera description #%d', i)
    });
  }

  for (var i = 26; i < 50; i++) {
    comments.push({
      id           : i,
      pricePer     : i*2,
      name         : util.format('Camera%s', i),
      img          : 'dist/public/camera-1.jpg',
      MP           : 28,
      description  : util.format('Camera description #%d', i)
    });
  }

  var dataDir = path.join(__dirname, 'data');
  try {
    fs.mkdirSync(dataDir);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
  fs.writeFileSync(path.join(dataDir, 'cameras.json'),
                   JSON.stringify(comments, null, 2));

};

generateData();
