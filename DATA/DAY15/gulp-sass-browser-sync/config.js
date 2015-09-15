/* 루트 디렉토리 설정 -------------------------- */
var root = 'www';

/*! 환경설정 모듈 정의/출력 © yamoo9.net, 2015 */
module.exports = {

	'root': root,

	// Browser-sync 옵션
	// http://www.browsersync.io/docs/options/
	'browserSync': {
		'server'  : [ root ],
		'port'    : 9090,
		'notify'  : false,
	},

	// Node Sass 설정
	'sass': {
		'src': root + '/sass/**/*.{sass,scss}',
		'dest': root + '/css',
		'options': {
			// compact, compressed, nested, expanded
			'outputStyle'    : 'expanded',
			'indentedSyntax' : true
		}
	},

	// Sourcemap 설정
	'sass_sourcemaps': './maps',

	// 브라우저 리스트 참고 URL
	// https://github.com/ai/browserslist#queries
	'autoprefixer': [
		'> 1%',
		'last 2 versions'
	]

};