const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const {
  mongoose
} = require('./models')
const config = require('./config/config')
mongoose.connect(config.db.path)

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')
require('./routes')(app)

app.listen(config.port)
console.log('Server started on port' + config.port)
