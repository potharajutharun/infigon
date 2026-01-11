"use client";

import { Product } from "@/types/Products";
import { useMemo, useState } from "react";
import { getFavorites } from "@/utils/favorites";

interface FilterComponentProps {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
}

function FilterComponent({ products, onFilter }: FilterComponentProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavs, setShowFavs] = useState(false);

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(unique)];
  }, [products]);

  const applyFilter = (
    searchValue: string,
    categoryValue: string,
    favOnly: boolean
  ) => {
    let baseList = favOnly ? getFavorites() : products;

    if (categoryValue !== "all") {
      baseList = baseList.filter((p) => p.category === categoryValue);
    }

    if (searchValue.trim()) {
      baseList = baseList.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    onFilter(baseList);
  };

  return (
    <div className="mb-6 flex flex-wrap items-center gap-4 py-5">
      {/* 🏷 Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              applyFilter(search, cat, showFavs);
            }}
            className={`
              px-4 py-1.5 rounded-full border text-sm capitalize
              transition cursor-pointer whitespace-nowrap
              ${
                category === cat
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            `}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
      </div>

      {/* Favorites */}
      <button
        onClick={() => {
          const next = !showFavs;
          setShowFavs(next);
          applyFilter(search, category, next);
        }}
        className="
          px-4 py-1.5 rounded-full border
          cursor-pointer text-sm
          bg-white dark:bg-gray-800
          hover:bg-gray-100 dark:hover:bg-gray-700
        "
      >
        {showFavs ? "All Products" : "❤️ Favorites"}
      </button>

      {/*  Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          applyFilter(e.target.value, category, showFavs);
        }}
        className="
          w-full sm:w-100
          px-4 py-2
          border rounded-full
          outline-none
          bg-white dark:bg-gray-800
          text-black dark:text-white
          focus:ring-2 focus:ring-blue-500
        "
      />
    </div>
  );
}

export default FilterComponent;
