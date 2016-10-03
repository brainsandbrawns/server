const test = require('tape');
const server = require('../lib/server.js');

test('GET / returns status code 200', (t) => {
  t.plan(1);

  server.inject({url: '/', method: 'GET'}, response => {
    t.equal(response.statusCode, 200, 'Status code is 200');
    t.end();
  });
});
