var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuiltSchema = new Schema({

    model: {
        type: String,
        trim: true,
    },
    size: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
});

var Quilt = mongoose.model("Quilt", QuiltSchema);

module.exports = Quilt;
