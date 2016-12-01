import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './app/routes'
import proxy from 'http-proxy-middleware'

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'build'), {index: false}))
app.use('/app', proxy({target: 'http://www.vmaking.com', changeOrigin: true}));
app.use('/code', proxy({target: 'http://www.vmaking.com', changeOrigin: true}));

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
    match({routes, location: req.url}, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // hey we made it!
            const appHtml = renderToString(<RouterContext {...props}/>)
            const appTitle = 'Vmaking!'
            res.send(renderPage(appHtml,appTitle))
        } else {
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(appHtml,appTitle) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset=utf-8/>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="description" content="">
      <meta name="keywords" content="">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>${appTitle}</title>
      <meta name="renderer" content="webkit">
    </head>
    <body>
      <div id=app>${appHtml}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
   `
}

var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})
