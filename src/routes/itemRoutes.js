import express from "express"

import { addItem, getItems, stockIn, stockOut } from "../controllers/itemController.js"

const router= express.Router();

router.post('/', addItem);
router.get('/', getItems);
router.put('/:id/stock-in', stockIn);
router.put('/:id/stock-out', stockOut);

export default router;

