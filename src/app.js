import express from "express"

const app = express();

app.get('/',(req,res)=>{
    res.send("hello from app");
})

export default app;