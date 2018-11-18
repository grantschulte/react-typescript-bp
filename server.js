require('dotenv').load()

const express = require('express')
const morgan = require('morgan')
const config = require('./appconfig')
const isEnv = require('./utils/is-env')

const app = express()

app.set('port', process.env.PORT || config.APP_PORT)
app.use(express.static(config.DIRS.build))

if (isEnv('dev')) {
  app.use(morgan('tiny'))
}

app.use('/favicon.ico', (req, res) => res.status(204))
app.use('/', (req, res) => {
  res.sendFile(`${config.DIRS.root}/index.html`)
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on ${app.get('port')} in ${process.env.NODE_ENV}.`)
})
