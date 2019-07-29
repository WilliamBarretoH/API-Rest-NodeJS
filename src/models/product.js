const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt:{
        type: String,
        default: Date.now,
    },
});

mongoose.model('product', ProductSchema);
