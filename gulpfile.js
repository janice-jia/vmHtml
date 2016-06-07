'use strict';
/**
 * 引入包
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');//sass的编译
var minifycss = require('gulp-minify-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//自动添加css前缀
var jshint = require('gulp-jshint');//js代码校验
var concat = require('gulp-concat');//合并js文件
var uglify = require('gulp-uglify');//压缩js代码
var rename = require('gulp-rename');//重命名
var notify = require('gulp-notify');//更改提醒
var cssSprite = require('gulp-css-spritesmith');//css 代码中的切片合并成雪碧图的工具

/**
 * 引入配置
 */
var pathConfig = require('./gulpConfigPath.js');



/*
 * default
 * */
gulp.task('default', ['autoSprite','styles','scripts']);


/*
 * 监听
 * */
gulp.task("watch", function(){
    gulp.watch(pathConfig.src.sassSrc+'*.scss', ['styles','autoSprite']);
    gulp.watch(pathConfig.src.jsSrc, ['scripts']);
});

// Styles任务
gulp.task('styles', function() {
    //编译sass
    return sass(pathConfig.src.sassSrc+'*.scss')
        //添加前缀
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))

        //保存未压缩文件到我们指定的目录下面
        .pipe(gulp.dest(pathConfig.src.sassDest))

        //css代码合并
        .pipe(concat('all.css'))

        //给文件添加.min后缀
        .pipe(rename({ suffix: '.min' }))

        //压缩样式文件
        .pipe(minifycss({
                    advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
                    compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
                    keepBreaks: false//类型：Boolean 默认：false [是否保留换行]
                }))

        //输出压缩文件到指定目录
        .pipe(gulp.dest(pathConfig.src.minCss))

        //提醒任务完成
        .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts任务
gulp.task('scripts', function() {
    //js代码校验
    return gulp.src(pathConfig.src.jsSrc)
        //js检验
        .pipe(jshint())
        .pipe(jshint.reporter('default'))

        //js代码合并
        .pipe(concat('all.js'))

        //给文件添加.min后缀
        .pipe(rename({suffix: '.min' }))

        //压缩脚本文件
        .pipe(uglify())

        //输出压缩文件到指定目录
        .pipe(gulp.dest(pathConfig.src.jsDest))

        //提醒任务完成
        .pipe(notify({ message: 'Scripts task complete' }));
});

// autoSprite 任务
gulp.task('autoSprite', function() {
        gulp.src('html/static/css/src/*.scss').pipe(cssSprite({
            // sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
            imagepath: pathConfig.src.iconSrc,

            // 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
            spritedest: 'images/iconPositon/',

            // 替换后的背景路径，默认 ../images/
            spritepath: '../images/iconPositon/',

        }))
        ////给文件添加.min后缀
        //.pipe(rename({suffix: '.position' }))

        .pipe(gulp.dest('./'))
        //提醒任务完成
        .pipe(notify({ message: 'autoSprite task complete'}));
})
