'use strict';
/**
 * 引入包
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');//sass的编译
//var cleanCss = require('gulp-clean-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//自动添加css前缀
var concat = require('gulp-concat');//合并js文件
var uglify = require('gulp-uglify');//压缩js代码
var rename = require('gulp-rename');//重命名
var notify = require('gulp-notify');//更改提醒
//var cssSprite = require('gulp-css-spritesmith');//css 代码中的切片合并成雪碧图的工具
//var gulpIf = require('gulp-if');//gulp if
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/*
 * default
 * */
gulp.task('default', [
    'styles-wujinshenyu',
    'styles-qijiwangzuo',
    'styles-cosplay',
    'styles-disney',
    'styles-dongrinuanbei',
    'styles-denghuo',
    'styles-yiyingjuquan',
    'styles-tanqingshuoan',
    'styles-yongwuzhijing',
    'styles-youjianlaoganbu',
    'styles-kuaniandaxi'
],function(){

});

// 实时刷新浏览器
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: [
                "./zt/wujinshenyu",
                "./zt",
                ".zt/disney",
                "./zt/dongrinuanbei",
                "./zt/denghuo",
                "./zt/yiyingjuquan",
                "./zt/yiyingjuquan",
                "./zt/yongwuzhijing",
                "./zt/youjianlaoganbu",
                "./zt/kuaniandaxi"
            ]
        }
    });

});


/*
 * 监听
 * */
gulp.task("watch",['server'], function(){
    gulp.watch('./zt/*/css/*.css').on('change', reload);
    gulp.watch("./zt/*/*.html").on('change', reload);

    gulp.watch('./zt/*/scss/*.scss', ['styles-wujinshenyu']);
    gulp.watch('./zt/qijiwangzuo/scss/*.scss', ['styles-qijiwangzuo']);
    gulp.watch('./zt/cosplay/scss/*.scss', ['styles-cosplay']);
    gulp.watch('./zt/kfilm/scss/*.scss', ['styles-kfilm']);
    gulp.watch('./zt/sunhuohuo/scss/*.scss', ['styles-sunhuohuo']);
    gulp.watch('./zt/disney/scss/*.scss', ['styles-disney']);
    gulp.watch('./zt/dongrinuanbei/scss/*.scss', ['styles-dongrinuanbei']);
    gulp.watch('./zt/denghuo/scss/*.scss', ['styles-denghuo']);
    gulp.watch('./zt/yiyingjuquan/scss/*.scss', ['styles-yiyingjuquan']);
    gulp.watch('./zt/tanqingshuoan/scss/*.scss', ['styles-tanqingshuoan']);
    gulp.watch('./zt/yongwuzhijing/scss/*.scss', ['styles-yongwuzhijing']);
    gulp.watch('./zt/youjianlaoganbu/scss/*.scss', ['styles-youjianlaoganbu']);
    gulp.watch('./zt/kuaniandaxi/scss/*.scss', ['styles-kuaniandaxi']);
});


// 无尽神域专题任务
gulp.task('styles-wujinshenyu', function() {
    //编译sass
    return sass('./zt/wujinshenyu/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/wujinshenyu/css/'))
});



// 奇迹王座专题任务
gulp.task('styles-qijiwangzuo', function() {
    //编译sass
    return sass('./zt/qijiwangzuo/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/qijiwangzuo/css/'))
});

// cosplay专题任务
gulp.task('styles-cosplay', function() {
    //编译sass
    return sass('./zt/cosplay/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/cosplay/css/'))
});

// 韩国电影专题任务
gulp.task('styles-kfilm', function() {
    //编译sass
    return sass('./zt/kfilm/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/kfilm/css/'))
});

// sunhuohuo专题任务
gulp.task('styles-sunhuohuo', function() {
    //编译sass
    return sass('./zt/sunhuohuo/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/sunhuohuo/css/'))
});

//disney电影专题
gulp.task('styles-disney', function(){
    //编译sass
    return sass('./zt/disney/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/disney/css/'))

});

//冬日暖被专题
gulp.task('styles-dongrinuanbei', function(){
    //编译sass
    return sass('./zt/dongrinuanbei/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/dongrinuanbei/css/'))

});


//等活专题
gulp.task('styles-denghuo', function(){
    //编译sass
    return sass('./zt/denghuo/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/denghuo/css/'))

});



//一应剧全专题
gulp.task('styles-yiyingjuquan', function(){
    //编译sass
    return sass('./zt/yiyingjuquan/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/yiyingjuquan/css/'))

});


//谈情说案专题
gulp.task('styles-tanqingshuoan', function(){
    //编译sass
    return sass('./zt/tanqingshuoan/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/tanqingshuoan/css/'))

});

//永武止境专题
gulp.task('styles-yongwuzhijing', function(){
    //编译sass
    return sass('./zt/yongwuzhijing/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/yongwuzhijing/css/'))

});

//又见老干部专题
gulp.task('styles-youjianlaoganbu', function(){
    //编译sass
    return sass('./zt/youjianlaoganbu/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/youjianlaoganbu/css/'))

});

//跨年大戏
gulp.task('styles-kuaniandaxi', function(){
    //编译sass
    return sass('./zt/kuaniandaxi/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/kuaniandaxi/css/'))

});





