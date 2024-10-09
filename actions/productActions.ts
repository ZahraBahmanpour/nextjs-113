"use server";
import dbConnect from "@/db/db-connect";
import ProductModel from "@/models/Product";
import { revalidatePath } from "next/cache";
import { z } from "zod";
export async function createProduct(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(3),
    price: z.number().min(1),
    countInStock: z.number().min(1),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    price: Number(formData.get("price")),
    countInStock: Number(formData.get("countInStock")),
  });

  if (!parse.success) {
    return { message: "Form data not Valid" };
  }

  const data = parse.data;
  try {
    await dbConnect();
    const product = new ProductModel(data);
    await product.save();
    revalidatePath("/products");
    return { message: `Created Product ${data.name}` };
  } catch (e: any) {
    return { message: e.message };
  }
}

export async function deleteProduct(formData: FormData) {
  try {
    await dbConnect();
    await ProductModel.findOneAndDelete({ _id: formData.get("_id") });
    revalidatePath("/products");
    return { message: `Deleted Product` };
  } catch (e: any) {
    return { message: e.message };
  }
}
