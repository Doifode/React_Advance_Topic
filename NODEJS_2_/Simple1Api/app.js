const express = require('express');
const app = express();
const StudentRoute = require('./Routes/Student')
const faculty = require('./Routes/Faculty')
const mongoose = require('mongoose');
// const cors = require('cors')
mongoose.connect('mongodb+srv://yash:yash@cluster0.h2fnqe5.mongodb.net/?retryWrites=true&w=majority')


// app.use(cors())
mongoose.connection.on(error => console.log(error))

mongoose.connection.on('connected', connected => {
    console.log('connected with data base ......', connected)
})

module.exports = app



// app.use('/student', StudentRoute)
// app.use('/faculty', faculty)

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'server  is running'
//     })
// })

// app.use((req, res, next) => {
//     res.status(404).json({
//         error: "Bad Request "
//     })
// })