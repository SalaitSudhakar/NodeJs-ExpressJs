import express from "express";
import { getProductById, getProducts, createProduct, updateProduct, deleteProduct } from "../Controllers/product.controller.js";

const router = express.Router();

router.get("/getdata", getProducts);
router.get("/getdata/:id", getProductById)
router.post('/create', createProduct)
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

export default router;