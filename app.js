// security param
const express = require('express');
const app = new express();
const router = require('./src/Router/api')
const rateLimiter =require('express-rate-limit');
const helmet =require('helmet');
const hpp=require('hpp');
const cors =require('cors');
const cookieParser=require("cookie-parser");

const path =require("path");
const mongoose=require('mongoose');



app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());


app.use(express.json({limit:"50MB"}));
app.use(express.urlencoded({limit:'50MB'}));


const limiter =rateLimiter(
{ windowMs:15*60*1000,max:3000,
    message: "You have exceeded your 3000 requests per minute limit.",
    headers: true,
}
);
app.use(limiter);
// this is required concept
// database connection end 
let URL="mongodb://localhost:27017/fullstackCrud";
let OPTION = {user:'',pass:'',autoIndex:true};





mongoose.connect(URL,OPTION).then((res)=>{
    console.log('DB connect success')
}).catch((err)=>{
    console.log(err)
})

app.set('etag',false);
app.use("/api",router);
app.use(express.static('Client/dist'))
// add react front end routing 
app.get('*',function(req,res){
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})


















module.exports=app;







