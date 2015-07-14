'use strict';

var query = require('pg-query');
var config = require('../config');

query.connectionParameters = config.connectionParameters;

module.exports = query;
