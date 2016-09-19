'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');

const server = new Hapi.Server();
const routes = require('./routes');

server.connection({
  port: process.env.PORT || '3000'
});

server.route(routes);

server.start(err => {
  Hoek.assert(!err, 'Error occured when starting the server');

  console.log(`API server is running at: ${server.info.uri}`);
});

module.exports = server;
