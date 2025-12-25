import express from "express"

import { addItem, getItems, stockIn, stockOut, deleteItem, updateThreshold } from "../controllers/itemController.js"

const router= express.Router();

router.post('/', addItem);
router.get('/', getItems);
router.put('/:id/stock-in', stockIn);
router.put('/:id/stock-out', stockOut);
router.delete('/:id', deleteItem);
router.put("/:id/threshold", updateThreshold);
export default router;

