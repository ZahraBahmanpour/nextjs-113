"use client";
import { Product } from "@/models/Product";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default function ProductDetails({ product }: { product: Product }) {
  // console.log(params.productId);
  const { _id: productId, name, price, description } = product;
  const router = useRouter();
  if (Number(productId) > 10) {
    notFound();
  }
  return (
    <div>
      Product Details {name}
      <h3>${price}</h3>
      <p>{description}</p>
      <ul>
        <li>
          <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/3`}>Review 3</Link>
        </li>
      </ul>
      <button onClick={() => router.back()}>Place Order</button>
    </div>
  );
}
