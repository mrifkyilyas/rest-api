require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',route)



app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})