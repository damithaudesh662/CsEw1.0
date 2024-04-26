const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // This is a middleware to parse json files in requests

// This is to prevent Cross Origin Request Blocking from React Development Server (Also proxy key in client's package.json)
app.use(cors({
    origin: "http://localhost:3000",
}))

app.post("/api",(req,res)=>{
    const email = req.body.email;
    console.log(email);
    res.send("Recieved");
})

app.get("/",(req,res)=>{
    res.send("<h1> Server is Working </h1>");
})

app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
})

