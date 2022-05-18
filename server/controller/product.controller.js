import Products from "../models/product.model.js";
import Orders from "../models/order.model.js";
import mongoose from "mongoose";
let ObjectId = mongoose.Types.ObjectId();

export const getProducts = async (req, res, next) => {
  try {
    const getProducts = await Products.find({});
    if (getProducts.length <= 0) {
      return res.status(400).json("No Product found");
    }
    return res.status(200).json(getProducts);
  } catch (error) {
    console.log("Error", error.message);
  }
};
export const getProductById = async (req, res, next) => {
  try {
    const productDetail = await Products.findOne({
      _id: mongoose.Types.ObjectId(req.params.id),
    });
    if (!productDetail) {
      return res.status(400).json("No Product found");
    }
    return res.status(200).json(productDetail);
  } catch (error) {
    console.log("Error", error.message);
  }
};

export const placeOrder = async (req, res) => {
  try {
    const order = Orders({
      firstname: req.body.userData.firstname,
      lastname: req.body.userData.lastname,
      email: req.body.userData.email,
      phone: req.body.userData.phone,
      cartItem: req.body.cartItem,
    });
    const orderData = await order.save();
    return res.status(200).json(orderData);
  } catch (error) {
    console.log(error);
  }
};
