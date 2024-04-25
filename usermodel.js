import mongoose from "mongoose";
// import express from "express";
// import connectdb from './config/db.js'
// const app = express()
// app.use(express.json())
const user = new mongoose.Schema({
    id: {
        type:Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

//  const monmodel = mongoose.model("newcollection", user)

const userModel =mongoose.model("User",user,"users")
//  app.post("/send", async (req, res) => {
//      console.log("inside post function");
//      const data = new userModel({
//          name: req.body.name,
//          email: req.body.email,
//          address: req.body.address
//      });
//      const val = await data.save();
//      res.json(val)
//  })

const usersch=mongoose.model("User",user,"users")
const newuser=new usersch({
    'id':10,
    'name':'janany',
    'email':'jan@gmail.com',
    'address':'madurai'
 })  
//     {
//     'name':'debi',
//     'email':'debii@gmail.com',
//     'address':'uk'})
newuser.save().then(saveduser=>{
    console.log("new user added")
}).catch(err=>{
    console.log("user not saved")
})
export default userModel

