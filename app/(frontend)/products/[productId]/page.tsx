"use client";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default function ProductDetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  // console.log(params.productId);
  const router = useRouter();
  if (Number(params.productId) > 10) {
    notFound();
  }
  return (
    <div>
      Product Details {params.productId}
      <ul>
        <li>
          <Link href={`/products/${params.productId}/reviews/1`}>Review 1</Link>
        </li>
        <li>
          <Link href={`/products/${params.productId}/reviews/2`}>Review 2</Link>
        </li>
        <li>
          <Link href={`/products/${params.productId}/reviews/3`}>Review 3</Link>
        </li>
      </ul>
      <button onClick={() => router.back()}>Place Order</button>
    </div>
  );
}
