import ProductCard from "@/components/product/ProductCard";
import dbConnect from "@/db/db-connect";
import ProductModel, { Product } from "@/models/Product";
import CreateProduct from "./create-product";

export default async function ProductsPage() {
  // const res = await fetch("http://localhost:4000/products"); build time
  // const res = await fetch("http://localhost:4000/products", { on demand
  //   cache: "no-store",
  // });
  // const res = await fetch("http://localhost:4000/products", {
  //   next: { revalidate: 20 },
  // });
  // const products: Product[] = await res.json();
  // console.log(products);
  await dbConnect();
  const products = (await ProductModel.find({})) as Product[];
  const parsedProducts: Product[] = JSON.parse(JSON.stringify(products));
  console.log("ppppppppppppp", parsedProducts);
  return (
    <div>
      <h1>Products List</h1>
      <div className="grid grid-cols-4">
        {parsedProducts.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
      <CreateProduct />
    </div>
  );
}
