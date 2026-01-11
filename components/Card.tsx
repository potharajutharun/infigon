"use client";

import Image from "next/image";
import { Product } from "@/types/Products";
import { useRouter } from "next/navigation";
import { isFavorite, toggleFavorite } from "@/utils/favorites";
import { useState } from "react";

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  const router = useRouter();
  const [fav, setFav] = useState(isFavorite(product.id));

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleFav = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    toggleFavorite(product);
    setFav(!fav);
  };

  return (
    <div
      onClick={handleClick}
      className="relative max-w-sm cursor-pointer rounded-xl bg-white shadow-md hover:shadow-xl transition"
    >
      {/*  Favorite Button */}
      <button
        onClick={handleFav}
        className="
          absolute top-2 right-2 z-10
          rounded-full border
          px-2 py-1 text-sm
          bg-white
          cursor-pointer
        "
      >
        {fav ? "❤️" : "🤍"}
      </button>

      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <span className="text-lg font-bold">${product.price}</span>
      </div>
    </div>
  );
}

export default Card;
