import http from 'http'
import fs from 'fs'
import express from 'express'
import bodyParser from 'body-parser'

import request from 'request'
import api from './resources'

const app = express()

app.server = http.createServer(app)

app.use(bodyParser.json({limit : '1000kb'}))
app.use('/', api())
app.use(express.static('webapp/static'))

app.server.listen(process.env.SERVER_PORT, process.env.SERVER_IP, function() {
    console.log(process.env.SERVER_IP + ":" + process.env.SERVER_PORT)
    console.log("app server is ready")
})
