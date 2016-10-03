'use strict';

const test = require('tape');
const server = require('../lib/server.js');
const Hapi = require('hapi');

test('Server should start', (t) => {
  t.plan(1);
  t.equal(server instanceof Hapi.Server, true, 'Server is an instance of the Hapi Server');
  t.end();
});

// prevents tests from hanging
test('teardown', (t) => {
  server.stop(err => {
    if (err) {
      console.log(`Termination error ${err}`);
    }
  });
  t.end();
});
