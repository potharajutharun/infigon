import { Product } from "@/types/Products";

const KEY = "favorites";

export const getFavorites = (): Product[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(sessionStorage.getItem(KEY) || "[]");
};

export const toggleFavorite = (product: Product): Product[] => {
  const favorites = getFavorites();
  const exists = favorites.find(p => p.id === product.id);

  const updated = exists
    ? favorites.filter(p => p.id !== product.id)
    : [...favorites, product];

  sessionStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};

export const isFavorite = (id: number): boolean => {
  return getFavorites().some(p => p.id === id);
};
