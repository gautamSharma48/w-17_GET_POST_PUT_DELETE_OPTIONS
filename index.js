const express=require("express");
const dotenv=require("dotenv")
const app =express();
const port= process.env.PORT || 8080;
dotenv.config();

app.use(express.json());
app.use("/",routes);

app.listen(port,()=>console.log(`server connected with ${port}`))
