import express from "express"
import cors from "cors"
import itemRoutes from "./routes/itemRoutes.js";

const app = express();

app.use(cors({
    origin:"*"
}));   // middilewares

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello from app");
})

app.use("/api/items", itemRoutes);



export default app;