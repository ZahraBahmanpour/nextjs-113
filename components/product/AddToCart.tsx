"use client";
import useCartService from "@/hooks/useCartStore";
import { OrderItem } from "@/models/Order";

export default function AddToCart({ item }: { item: OrderItem }) {
  const { increase, cartItems, decrease } = useCartService();
  const exist = cartItems.find((c) => c._id === item._id);
  return exist ? (
    <>
      <button onClick={() => decrease(item)}>-</button>
      <span>{exist.qty}</span>
      <button onClick={() => increase(item)}>+</button>
    </>
  ) : (
    <button onClick={() => increase(item)}>Add to Cart</button>
  );
}
