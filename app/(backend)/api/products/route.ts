import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Chair" },
  { id: 2, name: "Table" },
  { id: 3, name: "Toy" },
];
export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = { id: products.length + 1, name: data.name };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
