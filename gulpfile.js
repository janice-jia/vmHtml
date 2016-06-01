'use strict';
/**
 * 引入包
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var cssMin = require('gulp-minify-css');

/**
 * 引入配置
 */
var pathConfig = require('./gulpConfigPath.js');



/*
 * default
 * */
gulp.task('default', ['srcSass','cssMin','watch']);


/*
 * 监听
 * */
gulp.task("watch", function(){
    gulp.watch(pathConfig.src.sassSrc, function(){
        gulp.run('srcSass');
    });
});

/*
 * cssMin  压缩css
 * */
gulp.task('cssMin', function () {
    gulp.src(pathConfig.src.cssSrc)
        .pipe(cssMin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false//类型：Boolean 默认：false [是否保留换行]
        }))
        .pipe(gulp.dest(pathConfig.src.minCss));
});

/*
 * default
 * */
gulp.task('srcSass', function () {
    return sass(pathConfig.src.sassSrc)
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(pathConfig.src.sassDest));
});
