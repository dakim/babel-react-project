import express from 'express'
import fs from 'fs'
import path from 'path'
import request from 'request'



export default function() {
    const app = express()

    app.use(express.urlencoded({
      extended: true
    }))

    app.get("/status", (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')

        res.end("Hello World!")
    })

    return app
}
