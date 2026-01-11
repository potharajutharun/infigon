"use client";

import Card from "@/components/Card";
import Skeleton from "@/components/Skeleton";
import FilterComponent from "../../components/FilterComponent";
import { useEffect, useState } from "react";
import { Product } from "@/types/Products";
import { getProducts } from "@/Services/products";

function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="p-4">
      {/*  Filters */}
      <FilterComponent products={products} onFilter={setFilteredProducts} />

      {/*  No Products Found */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <span className="text-4xl mb-3">😕</span>
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm text-gray-400">
            Try adjusting your filters or search
          </p>
        </div>
      ) : (
        /*  Products */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
