var root, dir, config;

// 프로젝트 루트 경로
root = './src';

// 폴더 경로
dir = {
	html:  root + '/**/*.{htm,html}',
	sass:  root + '/sass',
	build: './build'
};

// 모듈 설정
var config = {

	browserSync: {
		// https://www.browsersync.io/docs/options/
		server: {
			baseDir:   dir.build,
			directory: true,
			port:      8080,
			index:     'index.html',
			logLevel:  "debug",
			open:      false,
			browser:   ["google chrome", "firefox"],
			notify:    false
		}
	},

	dir: dir,

	// MinifyHTML
	// https://github.com/Swaagie/minimize#options
	minifyHTML: {
		empty:        !true,
		cdata:        !true,
		comments:     !true,
		ssi:          !true,
		conditionals: true,
		spare:        !true,
		quotes:       true,
		loose:        !true
	},

	// Sass + Compass
	compass: {
		src: dir.sass + '/**/*.{sass,scss}',
		// https://www.npmjs.com/package/gulp-compass
		// config_file: './config.rb',
		// Sass 라이브러리
		options: {
			require: [
				'sass-globbing',
				'bourbon',
				'susy'
			],
			sass:       dir.sass,
			css:        dir.build + '/css',
			image:      dir.build + '/images',
			javascript: dir.build + '/js',
			font:       dir.build + '/font',
			sourcemap:  true,
			style:      'expanded',
			relative:   true,
			comments:   false
		}
	}

};

module.exports = config;