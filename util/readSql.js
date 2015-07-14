'use strict';

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');

function readSql(dirname, filepath) {
	var sql = path.join(dirname, filepath);

	return fs.readFileAsync(sql, 'utf-8');
}

module.exports = readSql;
