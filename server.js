require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected Successfully");
})
.catch((error)=>{
    console.log("MongoDB connection failed", error);
    
})