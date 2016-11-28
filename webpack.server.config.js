var fs = require('fs')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'server.js'),
    output: {
        filename: 'server.bundle.js'
    },
    target: 'node',
    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod
        return ext
    }, {}),
    node: {
        __filename: false,
        __dirname: false
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader: 'url?prefix=font/&limit=10000'},
            {test: /\.(jpg|png)$/,loader: 'url?prefix=font/&limit=10000'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'vmking',
        }),
    ]
}
