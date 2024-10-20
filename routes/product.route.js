const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// get all
router.get("/", getProducts);

// single
router.get("/:id", getProduct);

// create
router.post("/", createProduct);

// udpate
router.put("/:id", updateProduct);

// delete
router.delete("/:id", deleteProduct);

module.exports = router;
