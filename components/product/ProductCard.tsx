import { Product } from "@/models/Product";
import Image from "next/image";
import AddToCart from "./AddToCart";
// import styles from "./productCard.module.css";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function ProductCard({ product }: { product: Product }) {
  const { name, price, image, _id } = product;
  return (
    <div>
      <Link href={`/products/${_id}`}>
        <Image src={image} alt={name} width={300} height={200} />
        <h1>{name}</h1>
      </Link>
      <h2>${price}</h2>
      <AddToCart item={{ ...product, qty: 1 }} />
      <DeleteButton id={_id} />
    </div>
  );
}
