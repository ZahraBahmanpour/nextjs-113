import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {[
          { id: 1, name: "Chair" },
          { id: 2, name: "Table" },
          { id: 3, name: "Toy" },
        ].map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
