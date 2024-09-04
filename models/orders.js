const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    custromer_name : {type : String, required : true},
    product : {type : String, required : true},
    quantity : {type : Number, required : true},
    order_date : {type : String, required : true},
    status : {type : String, required : true},
},{timestamps : true, versionKey : false});

const Order = mongoose.model('Order',orderSchema);

module.exports=Order;
