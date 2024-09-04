const express = require("express");
const router = express.Router();

// Import Controller
const{getOrders,getOrder,createOrder,updateOrder,deleteOrder}= require("../controllers/orderController");

// APIs Routing Config
router.get("/orders",getOrders);
router.get("/order/:product",getOrder);
router.post("/order",createOrder);
router.put("/order/:id",updateOrder);
router.delete("/order/:id",deleteOrder);
// Export router
module.exports=router;
