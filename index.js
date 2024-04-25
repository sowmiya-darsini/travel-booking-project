import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/api/userroutes.js";


import connectdb from './config/db.js'
const app = express();
app.use(express.json())
//connect database
connectdb();

// app.get('/',(req,res)=>res.send("hello"));

// app.use(bodyParser.json());
// dotenv.config(
const port = 8077
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})


// const MONGOURL=process.env.MONGO_URL;


// mongoose.connect(MONGOURL).then(()=>{
//     console.log("DATABASE CONNECTED SUCCESSFULLY")
//     app.listen(PORT,()=>{
//         console.log(`server is running on port ${PORT}`)
//     })

// })

app.use("/api/userroutes", route)

