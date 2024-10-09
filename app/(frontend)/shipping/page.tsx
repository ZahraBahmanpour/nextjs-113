"use client";
import useCartService from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ShippingPage() {
  const { setShippingAddress } = useCartService();
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setShippingAddress({
      country: String(formData.get("country")),
      city: String(formData.get("city")),
      address: String(formData.get("address")),
      postalCode: String(formData.get("postalCode")),
    });
    router.push("/checkout");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Country
          <input type="text" id="country" name="country" />
        </label>
        <br />
        <label>
          City
          <input type="text" id="city" name="city" />
        </label>
        <br />
        <label>
          Address
          <input type="text" id="address" name="address" />
        </label>
        <br />
        <label>
          Postal Code
          <input type="text" id="postalCode" name="postalCode" />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
