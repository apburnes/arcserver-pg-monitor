'use strict';

var _ = require('lodash');
var Promise = require('bluebird');
var traversaur = require('arcserver-traversaur');
var addFetch = require('./fetchQueries/addFetch');
var addServer = require('./fetchQueries/addServer');
var addEndpoint = require('./fetchQueries/addEndpoint');

function fetch(serverList, callback) {
  if (!(serverList instanceof Array)) {
    return Promise
      .reject(new Error('Param serverList must be an array'))
      .nodeify(callback);
  }

  return addFetch()
    .then(function(id) {
      var fetchId = id[0][0].id;

      return Promise.map(serverList, function(server) {
        if (!server.attributes) {
          server.attributes = {};
        }

        _.assign(server.attributes, {fetch_id: fetchId});

        return traversaur(server.url, server.attributes)
          .then(function(data) {
            return data;
          })
          .catch(function() {
            return Promise.resolve(null);
          });
      });
    })
    .filter(removeNulls)
    .map(addServer)
    .map(mapEndpoints)
    .map(saveEndpoints)
    .nodeify(callback);
};

function mapEndpoints(endpoints) {
  return Promise.map(endpoints, function(endpoint) {
    var url = endpoint.url;
    var attributes = _.omit(endpoint, ['url']);

    return traversaur.getEndpoint(url, attributes)
      .then(function(data) {
        return data;
      })
      .catch(function() {
        return Promise.resolve(null);
      });
  })
  .filter(removeNulls);
};

function saveEndpoints(endpoints) {
  return Promise.map(endpoints, function(endpoint) {
    return addEndpoint(endpoint);
  });
}

function removeNulls(item) {
  return item !== null;
}

module.exports = fetch;
