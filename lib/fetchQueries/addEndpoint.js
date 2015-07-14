'use strict';

var _ = require('lodash');
var Promise = require('bluebird');

var query = require('../../util/query');
var readSql = require('../../util/readSql');

var addEndpointSql = readSql(__dirname, './sql/addEndpoint.sql');

function addEndpoint(endpoint, callback) {
	var serverId = endpoint.server_id;
	var fetchId = endpoint.fetch_id;
	var url = endpoint.url;
	var desc = _.omit(endpoint, ['server_id', 'fetch_id', 'url']);

	var params = [
		serverId,
		fetchId,
		url,
		desc
	];

	return addEndpointSql
		.then(function(sql) {
			return query(sql, params);
		})
		.nodeify(callback);
}

module.exports = addEndpoint;
