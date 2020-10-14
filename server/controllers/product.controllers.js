import { extend } from "lodash"

const { default: Product } = require("../models/Product")

const create =async(req,res)=>{
    const product = new Product(req.body)
    await product.save()
    try {
        return res.status(201).json({
            product,
            message: "product created!"
        })
    } catch (err) {
        return res.status(500).json({
            errro:err
        })
    }
}

const list = async(req,res)=>{
    try {
        const products = await Product.find()
        return res.status(200).json(products)
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error:err
        })
    }
}

const productById = async(req,res,next,id)=>{
    try {
        const product = await Product.findById(id)
        if(!product)return res.status(404).json({
            error: "product not found!"
        })
        req.profile = product
        return next()
    } catch (err) {
        return res.status(500).json({
            error:err
        })
    }
}

const read= async(req,res)=>{
    return res.status(200).json(req.profile)
}

const update = async(req,res)=>{
    try {
        let product = req.profile
        product = extend(product,req.body)
        await product.save()
        return res.status(201).json({
            message:"product updated",
            product
        })
    } catch (err) {
        return res.status(200).json({
            error:err
        })
    }
}

const remove = async(req,res)=>{
    try {
        const product = req.profile
        await product.remove()
        return res.status(200).json({
            message:"product deleted!"
        })
    } catch (err) {
        return res.status(500).json({
            error:err
        })
    }
}



export {create,read,list,productById,remove,update}