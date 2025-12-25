import express from "express"
import cors from "cors"
import itemRoutes from "./routes/itemRoutes.js";

const app = express();

app.use(cors({
    origin:"*"
}));   // middilewares

app.use(express.json())

app.use("/api/items", itemRoutes);

app.get('/',(req,res)=>{
    res.send("hello from app");
})





export default app;