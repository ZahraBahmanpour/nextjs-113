"use client";
import { deleteProduct } from "@/actions/productActions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <form
      action={async (formData) => {
        await deleteProduct(formData);
      }}
    >
      <input type="hidden" id="_id" name="_id" value={id} />
      <button type="submit">Delete</button>
    </form>
  );
}
