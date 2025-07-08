
const mongoose = require("mongoose");
require("dotenv").config()

const url=process.env.DB_URL;
const db = process.env.DATABASE;
mongoose.connect('mongodb+srv://22BCE9506:1234@cluster0.bucrpbq.mongodb.net/cars')
.then(res=>console.log("connection is successfull"))
.catch(err=>console.log(err))
