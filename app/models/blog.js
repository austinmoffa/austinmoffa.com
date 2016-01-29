var mongoose = require('mongoose');
var schema = new mongoose.Schema(
    {
        title : {type : String, default: ''},
        real_file_name : {type : String, default: ''}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Blog', schema);

