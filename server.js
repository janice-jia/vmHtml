var express = require('express')
var path = require('path')
var compression = require('compression')
var proxy = require('http-proxy-middleware')

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'build')))
app.use('/app', proxy({target: 'http://www.vmaking.com', changeOrigin: true}));
app.use('/code', proxy({target: 'http://www.vmaking.com', changeOrigin: true}));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})