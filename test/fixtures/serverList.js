'use strict';

module.exports = [
  {
    'url': 'http://services.nationalmap.gov/arcgis/rest/services?f=pjson',
    'attributes': {
    	'category': 'TNM Dynamic',
    	'access_type': 'public',
    	'env_type': 'production'
    }
  },
  {
    'url': 'http://basemap.nationalmap.gov/arcgis/rest/services/?f=pjson',
    'attributes': {
    	'category': 'TNM Basemap',
    	'access_type': 'public',
    	'env_type': 'production'
    }
  },
  {
    'url': 'http://tnmbeta.cr.usgs.gov/arcgis/rest/services?f=pjson',
    'attributes': {
    	'category': 'TNM Basemap',
    	'access_type': 'public',
    	'env_type': 'beta'
    }
  },
  {
    'url': 'http://tnmdev.cr.usgs.gov/arcgis/rest/services?f=pjson',
    'attributes': {
    	'category': 'TNM Dynamic',
    	'access_type': 'public',
    	'env_type': 'development'
    }
  },
  {
    'url': 'http://webservices.nationalatlas.gov/arcgis/rest/services?f=pjson',
    'attributes': {
    	'category': 'TNM Dynamic',
    	'access_type': 'public',
    	'env_type': 'production'
    }
  },
  {
    'url': 'http://webservices.er.usgs.gov/arcgis/rest/services?f=pjson',
    'attributes': {
    	'category': 'Graphics',
    	'access_type': 'public',
    	'env_type': 'production'
    }
  },
  {
    'url': 'http://basemap.er.usgs.gov/arcgis/rest/services?f=pjson',
    'attributes': {
    	'category': 'TNM Basemap',
    	'access_type': 'public',
    	'env_type': 'production'
    }
  }
];
