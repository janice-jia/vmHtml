'use strict';
/**
 * gulp 路径配置文件
 */
module.exports = {
    /**
     * 网站页面部分的文件路径
     */
    src:{
        sassSrc: './html/static/css/pc/src/',
        sassSrcVs1: './html/static/css/pc/version1.1/',
        sassDest: './html/static/css/pc/dest/',
        sassDestVs1: './html/static/css/pc/destVersion1.1/',
        cssSrc: './html/static/css/pc/dest/*.css',
        minCss: './html/static/css/pc/minCss',
        jsSrc: './html/static/js/pc/src/*.js',
        jsDest: './html/static/js/pc/dest',
        iconSrc: './html/static/images/pc/icon/',
    }
}