import { products } from "./constants/products.js";
import Product from "./models/product.model.js";

const DefaultData = async () => {
  try {
    const ProductCounter = await Product.count();
    if (ProductCounter <= 0) {
      await Product.insertMany(products);
      console.log("data import successfully");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default DefaultData;
