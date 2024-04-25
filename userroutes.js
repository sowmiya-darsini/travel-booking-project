import express from "express"
// import { fetch,create } from "../controller/usercontroller.js"
import usermodel from "../../model/usermodel.js";

const route=express.Router();
// route.get('/get',(req,res)=>{
//      res.send("from get method")
// })
route.get('/get',(req,res)=>{
    usermodel.find().then(usermodel=>res.json(usermodel))
    .catch(err=>res.status(404).json({nouserfound:"no user found"}))
});

route.post('/post',(req,res)=>{
    usermodel.create(req.body).then(usermodel=>res.json({msg:"new user added succussfully"}))
    // res.json(req.body)
})

route.put('/upd/:id',(req,res)=>{
    usermodel.findByIdAndUpdate(req.params.id,req.body).then(usermodel=>res.json({msg:"Updated successfully"})).catch(err=>res.status(404).json({msg:"unable to update"}))
})

route.delete('/del/:id',(req,res)=>
{
    console.log(req.params.id)
    usermodel.findByIdAndDelete(req.params.id).then(
        usermodel=>res.json({msg:"user deleted successfully"}))
        .catch(err=>res.status(404).json({error:"no such user"}))
})


// route.delete('/delete/:id', (req,res)=>
// {
//     usermodel.findOneAndDelete({id: req.params.id}, (err,usermodel) =>{
//         if(err) return res.status(500).json({error:"Error Occured"})
//         if(!usermodel) return res.status(404).json({error:"no such user"})
//         res.send("User Deleted Successfully")
//     }) 
// })

route.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await usermodel.findOneAndDelete({ id: req.params.id });
        if (!deletedUser) {
            return res.status(404).json({ error: "No such user" });
        }
        res.send("User Deleted Successfully");
    } catch (err) {
        res.status(500).json({ error: "Error Occurred" });
    }
});





// route.post('/post',(req,res)=>{
// //     res.send("from post method")
// })

// route.post("/create",create);
// route.get("/fetch",fetch);  wait i ll teach u :)
export default route;