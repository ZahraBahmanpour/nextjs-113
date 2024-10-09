import { Metadata } from "next";
import ProductDetails from "./ProductDetails";

const getProduct = async (productId: string) => {
  const res = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await res.json();
  return product;
};
type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const product = await getProduct(params.productId);
    console.log(product);
    if (product.name) {
      return {
        title: product.name,
      };
    } else {
      return {
        title: params.productId,
      };
    }
  } catch (e) {
    console.log(e);
  }
  return { title: "Not Found" };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProduct(params.productId);
  return <ProductDetails product={product} />;
}
