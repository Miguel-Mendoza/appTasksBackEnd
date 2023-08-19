const express= require('express');
const router = express.Router();
const newTaskSchema = require('../models/task');


// Crear tarea
router.post('/newtask', (req, res)=>{
    const newTask = newTaskSchema(req.body);
    newTask
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error}))
})

// Obtener todas las tareas
router.get('/alltasks', (req, res)=>{
    newTaskSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error}))
})

// Obtener tarea por Id 
router.get('/task/:id', (req, res)=>{
    const {id} = req.params;
    newTaskSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error}))
})

// Actualizar 
router.put('/update/:id', (req, res)=>{
    const {id} = req.params;
    const {title, description, typeTask, idstatus} = req.body
    console.log(res.body)
    newTaskSchema
    .updateOne({_id: id} , { $set:{title, description, idstatus }} )
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error}))
})

// eliminar tarea
router.delete('/deleteId/:id', (req, res)=>{
    const {id} = req.params;
    newTaskSchema
    .deleteMany({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error}))
})


module.exports = router;