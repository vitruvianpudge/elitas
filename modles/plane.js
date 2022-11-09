const mongoose = require('mongoose');

const planeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: Number,
        require: true
    },
    capacity: {
        type: Number,
        require: true
    },
    planeImage: {
        type: Number,
        require: true
    },
});

module.exports = mongoose.model("Plane", planeSchema)