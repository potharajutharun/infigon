import { Product } from "@/types/Products";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find((product) => product.id === id);
};
