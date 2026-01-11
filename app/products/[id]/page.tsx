"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/types/Products";
import { getProductById } from "@/Services/products";
import { useParams, useRouter } from "next/navigation";
import Skeleton from "@/components/Skeleton";

function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(Number(id));
        if (data) setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Skeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gray-50">
      {/*Back Button */}
      <button
        onClick={() => router.back()}
        className="
    absolute top-4 left-10
    flex items-center gap-2
    px-4 py-1.5
    rounded-full
    border border-blue-500
    text-blue-500
    hover:bg-blue-50
    transition
    cursor-pointer
  "
      >
        ← Back
      </button>

      {/* Product Card */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-4xl w-full  rounded-xl  p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-80 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-semibold">${product.price}</p>
            <p className="text-sm text-gray-500">
              Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
            <p className="text-sm text-gray-400 capitalize">
              Category: {product.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
