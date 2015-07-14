'use strict';

var query = require('../../util/query');
var readSql = require('../../util/readSql');
var addFetchSql = readSql(__dirname, './sql/addFetch.sql');

function addFetch(callback) {
  return addFetchSql
    .then(function(sql) {
      return query(sql);
    })
    .nodeify(callback);
}

module.exports = addFetch;
