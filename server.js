
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
// create the express app
const app = express()
// create middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
// Create default port to serve the app on
const port = process.env.PORT || 4000
app.listen(port)
// Log a feedback that this is actually running

