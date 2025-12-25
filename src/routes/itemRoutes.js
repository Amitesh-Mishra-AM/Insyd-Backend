import express from "express"

import { addItem, getItems, stockIn, stockOut, deleteItem } from "../controllers/itemController.js"

const router= express.Router();

router.post('/', addItem);
router.get('/', getItems);
router.put('/:id/stock-in', stockIn);
router.put('/:id/stock-out', stockOut);
router.delete('/:id', deleteItem);
export default router;

