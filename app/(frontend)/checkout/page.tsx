"use client";
import { createOrder } from "@/actions/orderActions";
import useCartService from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, shippingAddress, totalPrice, clear } = useCartService();
  const router = useRouter();
  return (
    <div>
      {cartItems.map((c) => (
        <div>{c.name}</div>
      ))}
      <div>
        <div>country: {shippingAddress.country}</div>
        <div>city: {shippingAddress.city}</div>
        <div>address: {shippingAddress.address}</div>
        <div>postalCode: {shippingAddress.postalCode}</div>
      </div>
      <button
        onClick={async () => {
          await createOrder(cartItems, shippingAddress, totalPrice);
          clear();
          router.push("/cart");
        }}
      >
        Place Order
      </button>
    </div>
  );
}
