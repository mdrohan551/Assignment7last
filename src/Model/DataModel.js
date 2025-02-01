const mongoose = require("mongoose");
const TaskSchema=mongoose.Schema({
    title:{type:String,required: true},
    Price:{type:Number,required: true},
    Description:{type:String,required: false},
    discount:{type:String,required: true},
    discountPrice:{type:Number,required: false},
    img:{type:String,required: true},

},{timestamps:true,versionKey:false});
let productModel=mongoose.model('cartData',TaskSchema)
module.exports = productModel