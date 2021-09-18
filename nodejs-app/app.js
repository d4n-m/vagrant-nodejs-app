import chalk from 'chalk';
import cows from 'cows';
import superb from 'superb';
import os from 'os';
import http from 'http';

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log('\n' + chalk.blue('Hello ') + chalk.grey(superb.random()) +  chalk.red(' World!') + '\n');

let cow_array = cows();
let cow = cow_array[getRandomArbitrary(1, 399)];
console.log(chalk.red(cow));


http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  
  var body = 'OS Release: ' + os.release() + '\n\n CPUs: ' + JSON.stringify(os.cpus()) + '\n\n\n\n' + cow_array[getRandomArbitrary(1, 399)];

  return body;
};