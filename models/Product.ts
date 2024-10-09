import mongoose from "mongoose";

export interface Product {
  _id: string;
  image: string;
  material: string;
  description: string;
  department: string;
  price: string;
  name: string;
  countInStock: number;
}

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;
