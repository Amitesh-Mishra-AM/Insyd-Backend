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
        const items= await Item.find(req.body);
        const formattedItem = items.map((item) => ({
      ...item.toObject(),
      isLowStock: item.quantity <= item.threshold,
    }));
    res.json(formattedItem);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}


export const stockIn= async(req, res)=>{
    try{
        const {amount}=req.body;
        if(!amount || amount<=0){
            return res.status(400).json({error: "Invalid amount"});

        }

        const item= await Item.findById(req.params.id);

        if(!item){
            return res.status(404).json({error: "Item not found"});
        }

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
        if(!amount || amount <=0){
            return res.status(400).json({error: "Invalid amount"});
        }

        const item= await Item.findById(req.params.id);

        if(!item){
            return res.status(404).json({error:"Item not found"});
        }
        item.quantity=Math.max(0,item.quantity-amount);
        await item.save();
        res.json(item);
    }catch(err){
        res.status(400).json({error: err.message});
    }

}