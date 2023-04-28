const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())


//setting the route
app.get("/api", (req,res)=>{
    res.json({"users": ["user-one", "user-two", "user-three"]})
})

app.listen(5000,()=>{ console.log("Server started on 5000 port...")})
