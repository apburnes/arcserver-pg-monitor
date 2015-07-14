'use strict';

var _ = require('lodash');
var Promise = require('bluebird');

var query = require('../../util/query');
var readSql = require('../../util/readSql');
var addServerSql = readSql(__dirname, './sql/addServer.sql');

function mapEndpoints(serverId, fetchId, array) {
	var mapped = _.map(array, function(endpoint) {
		return {
			server_id: serverId,
			fetch_id: fetchId,
			url: endpoint
		};
	});

	return Promise.all(mapped);
}

function addServer(profile, callback) {
	var fetchId = profile.fetch_id;
	var attributes = _.omit(profile, ['fetch_id', 'url', 'endpoints', 'currentVersion', 'folders']);

	var params = [
		fetchId,
		profile.currentVersion,
		profile.url,
		profile.folders,
		attributes
	];

	return addServerSql
		.then(function(sql) {
			return query(sql, params);
		})
		.spread(function(data) {
			var endpoints = profile.endpoints;
			var serverId = data[0].server_id;

			return mapEndpoints(serverId, fetchId, endpoints);
		})
		.nodeify(callback);
}

module.exports = addServer;
