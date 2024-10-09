"use server";

import dbConnect from "@/db/db-connect";
import OrderModel, { OrderItem } from "@/models/Order";
import { ShippingAddress } from "@/models/ShippingAddress";

export async function createOrder(
  cartItems: OrderItem[],
  shippingAddress: ShippingAddress,
  totalPrice: number
) {
  console.log("cartItems", cartItems);
  console.log("shippingAddress", shippingAddress);
  try {
    await dbConnect();
    const order = new OrderModel({
      orderItems: cartItems,
      shippingAddress,
      totalPrice,
    });
    await order.save();
  } catch (e) {
    console.log(e);
  }
}
