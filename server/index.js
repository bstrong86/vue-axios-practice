require('dotenv').config()
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  ctrl = require('./controller'),


  app = express()
  const {CONNECTION_STRING, SERVER_PORT} = process.env

app.use(bodyParser.json())
  massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to db')


  })

  app.post(`/api`, ctrl.addUser)
  app.get('/api', ctrl.getNames)

  app.listen(SERVER_PORT, () => console.log(`working on port ${SERVER_PORT}`))