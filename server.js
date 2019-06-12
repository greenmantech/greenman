const express = require('express')
const app = express()
const keys = require('./config/keys')
const cors = require('cors')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const mongoose = require('mongoose')

// Routes
const posts = require('./routes/api/posts')

// Cors middleware
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.urlencoded({ limit: '60mb', extended: false }))
app.use(bodyParser.json({ limit: '60mb', extended: false }))

//@todo - install and require helmet

// Db Config
const db = keys.mongoURI

//Cloudinary Config
cloudinary.config({ cloud_name: keys.cloudName, api_key: keys.apiKey, api_secret: keys.apiSecret })

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`Error: ${err.message}`))

// @route   GET /
// @desc    Test route for server
// @access  Public
app.get('/', (req, res) => {
    res.json({ msg: 'Server runs' })
})

// Use Routes
app.use('/api/posts', posts)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})