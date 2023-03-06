const express=require("express");
const dotenv=require("dotenv")
const mongoose = require("mongoose")
const routes=require("./routes")
const app =express();
const port= process.env.PORT || 8080;
dotenv.config();

app.use(express.json());
app.use("/",routes);

//db 
const connectDb=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected with db")).catch(err=>console.log(err))
}

app.listen(port,()=>{
    connectDb();
    console.log(`server connected with ${port}`)
})
