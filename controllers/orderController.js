const Order = require('../models/orders');
const express = require('express');

// Function add and export
exports.createOrder = async(req,res) => {
    const { custromer_name,product,quantity,order_date,status } = req.body;
    const orders = new Order({custromer_name,product,quantity,order_date,status});
    try{
        const newOrder=await orders.save();
        res.status(201).json(newOrder);
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

// Function update and export
exports.updateOrder = async(req,res) => {
    try{
        const { id } =req.params;
        const updateOrder=await Order.findByIdAndUpdate(id,req.body,{new:true});
        if(!updateOrder) return res.Status(404).json({message:'Order not found'})
        res.status(200).json(updateOrder);    
    }catch(err){
        res.status(400).json({message:err.message});
    }
};
// Function delete and export
exports.deleteOrder = async(req,res) => {
    try{
        const { id } =req.params;
        const deleteOrder=await Order.findByIdAndDelete(id);
        if(!deleteOrder) return res.Status(404).json({message:'Order not found'});
        res.status(200).json({message : 'Order deleted Successfully'});    

    }catch(err){
        res.status(400).json({message : err.message});
    }
};

// Function get all data and export
exports.getOrder = async(req,res) => {
    try{
        const { product } = req.params;

        const orders = await Order.findOne({product});
        if(!orders) return res.Status(404).json({message : 'Order not found'});

        res.json(orders);
    }catch(err){
        res.status(500).json({message : err.message});
    }
};

// Function get data by genre and export
exports.getOrders = async(req,res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json({message : err.message});
    }
};