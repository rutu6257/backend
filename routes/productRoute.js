const express=require("express");
const { createProduct, getAllProducts, getProductById, updatesProductById, deleteProductById } = require("../controller/productController");
const { auth } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router=express.Router();

router.post("/",auth, upload.single("image"),createProduct)
router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.put("/:id",auth, upload.single("image"),updatesProductById);
router.delete("/:id",deleteProductById)

module.exports=router