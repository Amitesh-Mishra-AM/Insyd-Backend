import mongoose from "mongoose";

const itemSchema=new mongoose.Schema(
    {   
        sku:{
            type: String,
            required: true,
            unique: true
        },
        name:{
            type: String,
            required: true
        },
        quantity:{
            type: String,
            required: true,
            min:0
        },
        threshold:{
            type: Number,
            required: true,
            min:0
        }
    },
    {timestamps: true}
)

export const Item=mongoose.model("Item",itemSchema);