'use strict';

var query = require('../util/query');
var sqlUp = require('../util/readSql')(__dirname, './sql/01-initSchema-asc.sql');
var sqlDown = require('../util/readSql')(__dirname, './sql/01-initSchema-dsc.sql');

exports.up = function(success, error) {
	return sqlUp
		.then(query)
		.then(success)
		.catch(error);
};

exports.down = function(success, error) {
	return sqlDown
		.then(query)
		.then(success)
		.catch(error);
};
