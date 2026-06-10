const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());


const todoRoutes = require("./routes/todoRoutes");
app.use("/",todoRoutes);


app.listen(500,()=>{
    console.log("Server Running");
});