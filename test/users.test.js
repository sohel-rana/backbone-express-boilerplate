const request = require('supertest');
const assert = require('assert');
const app = require('../server/app');

describe('GET /users', function () {
  it('responds with array of users and status 200', function (done) {
    request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert(Array.isArray(res.body));
        assert(res.body.every(u => typeof u === 'object'));
        done();
      });
  });
});
