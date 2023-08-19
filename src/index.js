const express = require('express');
const mongoose= require('mongoose')
require('dotenv').config()
const cors = require('cors');
const taskRouters = require('./routes/tasks')
const app = express()
const port = process.env.PORT || 9000


// Middle
app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use('/task', taskRouters)

// Rutas
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi api')
})

// Mongo connect
mongoose
.connect(process.env.MONGODB_URI)
.then( ()=>{console.log('Conexión establecida hacia la DB')})
.catch( (error)=> console.error(error))




app.listen(port, ()=> console.log('Server ejecutandose en puerto: ', port))