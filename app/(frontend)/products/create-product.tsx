"use client";
import { createProduct } from "@/actions/productActions";
import { useFormState } from "react-dom";

export default function CreateProduct() {
  const [state, formAction] = useFormState(createProduct, { message: "" });
  return (
    <form action={formAction}>
      <span style={{ color: "red" }}>{state.message}</span>
      <label>
        Name
        <input type="text" id="name" name="name" />
      </label>
      <br />
      <label>
        Price
        <input type="number" id="price" name="price" />
      </label>
      <br />
      <label>
        Count In Stock
        <input type="number" id="countInStock" name="countInStock" />
      </label>
      <br />
      <button type="submit">Create Product</button>
    </form>
  );
}
