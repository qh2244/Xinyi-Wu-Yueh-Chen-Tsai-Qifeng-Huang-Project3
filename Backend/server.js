const express  = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter = require("./router/user")
dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>
console.log("DB connection successfull")).catch(()=>{
    console.log("Some error occured")
})

// const MONGO_CONNECTION_STRING = 'mongodb+srv://5610:A2qBoWBgHpyTAMol@cluster0.ogz9wjy.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(MONGO_CONNECTION_STRING, {useNewUrlParser: true});


app.use(express.json())
app.use("/api/user", userRouter);

app.listen(8000, ()=>{
    console.log("Server is running")
})