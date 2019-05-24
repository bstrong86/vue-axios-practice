require('dotenv').config()
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  ctrl = require('./controller'),
  sessions = require('express-session')


  app = express()
  const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(bodyParser.json())
  massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to db')
  })
app.use(sessions({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000000000}
}))

  app.post(`/login`, ctrl.login)
  app.get('/getRecentWorkouts', ctrl.getRecentWorkouts)
  app.post('/register', ctrl.register)
  app.post('/logout', ctrl.logout)
  app.post('/createWorkout', ctrl.createWorkout)

  app.listen(SERVER_PORT, () => console.log(`working on port ${SERVER_PORT}`))