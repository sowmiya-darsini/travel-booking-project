import mongoose from "mongoose";

const db="mongodb+srv://sowmiya:mongodb24@cluster0.4li7vo9.mongodb.net/travel?retryWrites=true&w=majority&appName=Cluster0"
mongoose.set("strictQuery",true,"userNewUrlParser",true);
const connectdb=async()=>{
    try{
        await mongoose.connect(db);
        console.log("mongoDB is connected")
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

export default connectdb