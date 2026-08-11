import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/data/catalog";

async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("available", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    name: row.name,
    category: row.category,
    description: row.description,
    priceMin: row.price_min,
    priceMax: row.price_max,
    image: row.image_url,
    badge: row.badge,
    quoteOnly: row.quote_only,
  }));
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
}

export function useProductById(id: string) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .eq("available", true)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        throw error;
      }

      return {
        id: data.id,
        name: data.name,
        category: data.category,
        description: data.description,
        priceMin: data.price_min,
        priceMax: data.price_max,
        image: data.image_url,
        badge: data.badge,
        quoteOnly: data.quote_only,
      };
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
