'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var googlecdn = require('./index');

it('should replace libs with Google CDN hosted ones', function (cb) {
	var stream = googlecdn(require('./bower.json'));

	stream.on('data', function (file) {
		assert(/ajax\.googleapis/.test(file.contents.toString()));
		cb();
	});

	stream.write(new gutil.File({
		contents: new Buffer('<script src="bower_components/jquery/jquery.js"></script>')
	}));
});