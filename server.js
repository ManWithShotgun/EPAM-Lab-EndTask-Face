/* eslint-disable */
const http      = require('http');
const express   = require('express');
var fs          = require('fs');
var path        = require('path');
var serveStatic = require('serve-static');

var bodyParser  = require('body-parser');
var multipart   = require('connect-multiparty');


var auth        =require('./bin/customAuth');
var monitors    =require('./bin/monitors');
var cameras     =require('./bin/cameras');

var DATA_MONITORS = path.join(__dirname, 'bin/data', 'monitors.json');
var DATA_CAMERAS  = path.join(__dirname, 'bin/data', 'cameras.json');

const app = express();

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '.'));
})();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( multipart() );

app.route('/ws/cameras').get(cameras.camerasHandler).post(cameras.CreateCameraHandler);
app.route('/ws/cameras/:id').get(cameras.cameraHandler).delete(cameras.DeleteCameraHandler).put(cameras.UpdateCameraHandler);

app.route('/ws/monitors').get(monitors.monitorsHandler).post(monitors.CreateMonitorHandler);
app.route('/ws/monitors/:id').get(monitors.monitorHandler).delete(monitors.DeleteMonitorHandler).put(monitors.UpdateMonitorHandler);

app.get('/ws/counts', function(req, res) {
  console.log('counts');
  var countMonitors = JSON.parse(fs.readFileSync(DATA_MONITORS)).length;
  var countCameras = JSON.parse(fs.readFileSync(DATA_CAMERAS)).length;
  res.json({countMonitors, countCameras})
});

app.get('/ws/login', (req, res) => {
  setTimeout(auth.login, 100, req, res)

});

app.get('/ws/logout', function(req, res) {
  setTimeout(auth.logout, 100, req, res)

});
app.get('/ws/register', function(req, res) {
  setTimeout(auth.register, 100, req, res)
});
app.post('/ws/profile/edit', function(req, res) {
  setTimeout(auth.profileUpdate, 100, req, res)
});




app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3001, function onListen() {
  const address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
