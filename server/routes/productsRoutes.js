import express from "express";
import { createProduct } from "../controller/productController.js";

const router = express.Router();

// post request
router.post("/create", createProduct);
export default router;