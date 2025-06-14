const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const userRoute = require('./routes/user.route')

const cors = require('cors')
const ConnectToDb = require('./db/db')


const app = express()

ConnectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRoute)



app.get('/',(req,res)=>{
    res.send('server started')
})

module.exports = app;