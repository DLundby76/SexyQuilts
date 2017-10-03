var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var OrderSchema = new Schema({

    model: {
        type: String,
        trim: true,
    },
    size: {
        type: String,
        trim: true,
    },
    backing: {
        type: String,
        trim: true,
    },
    customerName: {
        type: String,
        trim: true,
    },
    customerAddress: {
        type: String,
        trim: true,
    },
    customerEmail: {
        type: String,
        trim: true,
    },
    orderNumber: {
        type: Number
    },
});

var Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
