const express=require("express");
const userRoute=require("./userRoute")
const productRoute=require("./productRoute")
const authRoute=require("./authRoute")
const cartRoute=require("./cartRoute");
const { auth } = require("../middleware/auth");
const orderRoute=require("./orderRoute")
const ratingRoute=require("./ratingRoute")
const routes=express.Router();

routes.use("/users",userRoute);
routes.use("/products",productRoute);
routes.use("/auth",authRoute)
routes.use("/carts",auth, cartRoute)
routes.use("/orders", auth, orderRoute);
routes.use("/ratings",auth,ratingRoute)

module.exports=routes; 

