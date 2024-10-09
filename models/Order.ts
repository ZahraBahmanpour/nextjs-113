import mongoose from "mongoose";
import { Product } from "./Product";

export interface OrderItem extends Product {
  qty: number;
}

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      country: { type: String },
      city: { type: String },
      address: { type: String },
      postalCode: { type: String },
    },
    totalPrice: { type: Number, required: false },
    isDelivered: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const OrderModel =
  mongoose.models.Order || mongoose.model("Order", orderSchema);
export default OrderModel;
