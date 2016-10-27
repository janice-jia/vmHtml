var htmlWebpackPlugin = require('html-webpack-plugin')
var webpack =require('webpack')

module.exports = {
    entry: './index.js',        //入口文件配置
    output: {
        path: 'build',         //打包文件存放的绝对路径
        filename: 'bundle.js',  //打包后的文件名
        publicPath: '/'         //网站运行时的访问路径
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            {test: /\.scss$/, loader: "style-loader!css-loader!sass"},
            {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,loader: 'url?prefix=font/&limit=10000'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Webpack-demos',
            template: 'views/index.html'
        }),
        new webpack.BannerPlugin('This file is created by vmaking')
    ]
}