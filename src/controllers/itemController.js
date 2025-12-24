import { Item } from "../models/Item.js";

export const addItem= async(req, res)=>{
    try{
        const item= await Item.create(req.body);
        res.status(201).json(item);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

export const getItems= async(req, res)=>{
    try{
        const item= await Item.find(req.body);
        res.json(item);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}


export const stockIn= async(req, res)=>{
    try{
        const {amount}=req.body;
        const item= await Item.findById(req.params.id);
        item.quantity+=amount;
        await item.save();
        res.json(item);
    }catch (err){
        res.status(400).json({error: err.message});
    }
}

export const stockOut= async(req, res)=>{
    try{
        const {amount}=req.body;
        const item= await Item.findById(req.params.id);
        item.quantity-=amount;
        await item.save();
        res.json(item);
    }catch(err){
        res.status(400).json({error: err.message});
    }

}