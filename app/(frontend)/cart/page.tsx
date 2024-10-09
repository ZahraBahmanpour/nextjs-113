"use client";
import useCartService from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, totalPrice, clear } = useCartService();
  const router = useRouter();
  return (
    <div>
      {cartItems.length === 0 ? (
        <span>Cart is empty</span>
      ) : (
        <div>
          <table>
            <thead>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </thead>
            <tbody>
              {cartItems.map((c) => (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.qty}</td>
                  <td>{c.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {totalPrice}
        </div>
      )}
      <br />
      <button onClick={() => clear()}>Clear Cart</button>
      <br />
      <button onClick={() => router.push("/shipping")}>Place Order</button>
    </div>
  );
}
