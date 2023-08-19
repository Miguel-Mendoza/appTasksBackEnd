const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    idstatus: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('newTask', taskSchema)