'use strict';
/**
 * 引入包
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');//sass的编译
var cleanCss = require('gulp-clean-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//自动添加css前缀
var jshint = require('gulp-jshint');//js代码校验
var concat = require('gulp-concat');//合并js文件
var uglify = require('gulp-uglify');//压缩js代码
var rename = require('gulp-rename');//重命名
var notify = require('gulp-notify');//更改提醒
var cssSprite = require('gulp-css-spritesmith');//css 代码中的切片合并成雪碧图的工具
var gulpIf = require('gulp-if');//gulp if
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;



/**
 * 引入配置
 */
var pathConfig = require('./gulpConfigPath.js');

/*
 * default
 * */
gulp.task('default', ['styles','stylesVs1','styles-wujinshenyu','cleanCss','scripts'],function(){


});

// 实时刷新浏览器
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: ["./html", "./zt/"]
        }
    });

});


/*
 * 监听
 * */
gulp.task("watch",['server'], function(){
    gulp.watch(pathConfig.src.sassSrc+'*.scss', ['styles']);
    gulp.watch(pathConfig.src.sassSrcVs1+'*.scss', ['stylesVs1']);
    gulp.watch('./zt/wujinshenyu/scss/*.scss', ['styles-wujinshenyu']);
    gulp.watch(pathConfig.src.sassDest+'*.css', ['cleanCss']);

    gulp.watch(pathConfig.src.sassDestVs1+'*.css').on('change', reload);
    gulp.watch(pathConfig.src.minCss+'*.css', ['cleanCss']).on('change', reload);
    gulp.watch(pathConfig.src.jsSrc, ['scripts']).on('change', reload);
    gulp.watch('./zt/wujinshenyu/css/*.css').on('change', reload);
    gulp.watch("./html/*.html").on('change', reload);
    gulp.watch("./zt/wujinshenyu/*.html").on('change', reload);

});

// Styles任务
gulp.task('styles', function() {
    //编译sass
    return sass(pathConfig.src.sassSrc+'*.scss')

        //保存未压缩文件到我们指定的目录下面
        .pipe(gulp.dest(pathConfig.src.sassDest))

        //添加前缀
        .pipe(autoprefixer('last 2 version'))

        .pipe(gulp.dest(pathConfig.src.sassDest))

        //提醒任务完成
        //.pipe(notify({ message: 'Styles task complete' }));
});


// Styles任务
gulp.task('stylesVs1', function() {
    //编译sass
    return sass(pathConfig.src.sassSrcVs1+'*.scss')

    //保存未压缩文件到我们指定的目录下面
        .pipe(gulp.dest(pathConfig.src.sassDestVs1))

    //提醒任务完成
    //.pipe(notify({ message: 'Styles task complete' }));
});

// 无尽神域专题任务
gulp.task('styles-wujinshenyu', function() {
    //编译sass
    return sass('./zt/wujinshenyu/scss/*.scss')

    //保存未压缩文件到我们指定的目录下面
        .pipe(gulp.dest('./zt/wujinshenyu/css/'))
});


// cleanCss
gulp.task('cleanCss', function() {
    //编译sass
    return gulp.src(pathConfig.src.sassDest+'*.css')
        //css代码合并
        .pipe(concat('all.css'))

        //给文件添加.min后缀
        .pipe(rename({ suffix: '.min' }))

        //压缩样式文件
        .pipe(cleanCss({compatibility: 'ie7'}))

        //输出压缩文件到指定目录
        .pipe(gulp.dest(pathConfig.src.minCss))

        //生成精灵图片
        .pipe(cssSprite({
            // sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
            imagepath: pathConfig.src.iconSrc,

            // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
            padding: 10,

            // 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
            spritedest: 'html/static/images/pc/positionIcon/',

            // 替换后的背景路径，默认 ../images/
            spritepath: '../../../images/pc/positionIcon/',

        }))
        .pipe(gulp.dest('./'))

        //提醒任务完成
        //.pipe(notify({ message: 'cleanCss task complete' }));
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
        //.pipe(notify({ message: 'Scripts task complete' }));
});

