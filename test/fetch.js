'use strict';

var expect = require('chai').expect;
var fetch = require('../lib/fetch');

var query = require('../util/query');
var list = require('./fixtures/serverList');

describe('fetch', function() {
  it('should successfully fetch and save data with a promise', function() {
    return fetch(list)
      .then(function(data) {
        return expect(data).to.be.an('array');
      });
  });

  it('should successfully fetch and save data with a callback', function(done) {
    fetch(list, function(err, data) {
      expect(data).to.be.an('array');
      done(err);
    });
  });
});
