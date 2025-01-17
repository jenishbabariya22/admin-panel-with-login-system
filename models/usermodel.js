const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
})

const tblName = mongoose.model('crud', crudSchema);
module.exports = tblName;