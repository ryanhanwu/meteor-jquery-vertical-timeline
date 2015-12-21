Package.describe({
	name: 'ryanwu:jquery-vertical-timeline',
	version: '0.0.1',
	summary: 'jQuery vertical timeline package for text and images',
	git: 'https://github.com/ryanhanwu/meteor-jquery-vertical-timeline.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.addFiles('lib/jquery-vertical-timeline/lib/cntl.min.css', 'client');
	api.addFiles('lib/jquery-vertical-timeline/lib/jquery.cntl.min.js', 'client');
});
