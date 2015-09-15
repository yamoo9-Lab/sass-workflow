var gulp           = require('gulp'),

	// CSS 프리프로세서
	sass           = require('gulp-sass'),
	// CSS3 제조사의 접두사 처리 모듈
	autoprefixer   = require('gulp-autoprefixer'),

	/* 유틸리티 ---------------------------------- */
	filter         = require('gulp-filter'),
	sourcemaps     = require('gulp-sourcemaps'),
	shell          = require('gulp-shell'),
	mq             = require('gulp-combine-mq'),

	/* Browser 서버/싱크 ------------------------- */
	browserSync    = require('browser-sync'),
	reload         = browserSync.reload;


/**
 * ----------------------------------------------------------------
 * 환경설정
 * ----------------------------------------------------------------
 */
var config = require('./config');

/**
 * ----------------------------------------------------------------
 * Gulp 업무
 * ----------------------------------------------------------------
 */
// 기본 업무
gulp.task('default', ['sass'], function() {
	browserSync(config.browserSync);
	gulp.start('watch');
});

// 관찰 업무
gulp.task('watch', function() {
	gulp.watch(config.root + '/*.html').on('change', browserSync.reload);
	gulp.watch([config.sass.src], ['sass']);
});


// 변경 업무: [node-sass] Scss → CSS
gulp.task('sass', function() {
	return gulp.src( config.sass.src )
		.pipe( sourcemaps.init() )
		.pipe( sass( config.sass.options ).on('error', sass.logError) )
		.pipe( autoprefixer(config.autoprefixer) )
		.pipe( mq() )
		.pipe( sourcemaps.write(config.sass_sourcemaps) )
		.pipe( gulp.dest( config.sass.dest ) )
		.pipe( reload({stream: true}) );
});



// 명령어 환경의 코드를 Gulp에서 수행할 수 있도록 조치
gulp.task('clean', shell.task('rm -rf ' + config.root +'/css'));



/**
 * ----------------------------------------------------------------
 * 유틸리티
 * ----------------------------------------------------------------
 */
// 오류 출력을 위한 errorLog 함수
// 오류 발생 시에도 watch 업무 중단하지 않음.
function errorLog(error) {
	console.error(error.message);
	this.emit('end');
}