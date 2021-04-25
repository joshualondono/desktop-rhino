const execFile = require('child_process').execFile; 
const exec = require('child_process').exec;
const portfinder = require('portfinder');

exports.macserver = function () { 

if(process.argv[2]) {
  var port = process.argv[2];
  if ( isNaN(port) ) {
    console.log('passed value is not a port');
  } else {
    portfinder.basePort = port;
  }
}
portfinder.getPort(function(err, port) {
  if(err) {
    console.error(err);
  } else {
    console.log(port);  var a = execFile('bin/nwjs', ['-S','localhost:' + port]); 

process.on('exit', function () {
    a.kill();
});

}
});
}
exports.macinternal = function () {  

if(process.argv[2]) {
  var port = process.argv[2];
  if ( isNaN(port) ) {
    console.log('passed value is not a port');
  } else {
    portfinder.basePort = port;
  }
}
portfinder.getPort(function(err, port) {
  if(err) {
    console.error(err);
  } else {
    console.log(port); var a = exec('php -S localhost:' + port); 

process.on('exit', function () {
    a.kill();
});

}
});
}
exports.winserver = function () { 

if(process.argv[2]) {
  var port = process.argv[2];
  if ( isNaN(port) ) {
    console.log('passed value is not a port');
  } else {
    portfinder.basePort = port;
  }
}
portfinder.getPort(function(err, port) {
  if(err) {
    console.error(err);
  } else {
    console.log(port); const child = execFile('bin/php', ['-S','localhost:' + port]); 
}
});
}
