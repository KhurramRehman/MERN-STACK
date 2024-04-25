require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/workouts')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next()
})

app.use('/api/workouts', router)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then((result) => {

        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening to port ' + process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })