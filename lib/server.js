'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

const routes = require('./routes');

server.connection({
  port: process.env.PORT || '3000'
});

server.route(routes);

server.start(err => {
  if (err) {
    throw new Error(err);
  }

  console.log(`API server is running at: ${server.info.uri}`);
});
