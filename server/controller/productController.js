import  PRODUCT from "../models/productModel.js"

// c -- for CRUD

export const createProduct = async (req,res)=>{
    const {title,image,description,price,category,duration,rating} = req.body;
    if(!title || !image || !rating ||!description || !category ||!price || !duration){
        res.status(400).json({success:false,errMsg:"all fields are required"})
        return
    }
    try {
        const product = await PRODUCT.create(req.body)
        res.status(200).json({success:true,message:"product created successfully", product})
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}