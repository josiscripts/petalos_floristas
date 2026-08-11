import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase configuration. Check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Tables = {
  products: {
    Row: {
      id: string;
      name: string;
      category: "ramos" | "plantas" | "rosas-eternas" | "complementos";
      description: string;
      price_min: number;
      price_max: number | null;
      image_url: string;
      badge: string | null;
      quote_only: boolean;
      available: boolean;
      created_at: string;
      updated_at: string;
    };
    Insert: {
      id: string;
      name: string;
      category: "ramos" | "plantas" | "rosas-eternas" | "complementos";
      description: string;
      price_min: number;
      price_max?: number | null;
      image_url: string;
      badge?: string | null;
      quote_only?: boolean;
      available?: boolean;
    };
    Update: {
      name?: string;
      category?: "ramos" | "plantas" | "rosas-eternas" | "complementos";
      description?: string;
      price_min?: number;
      price_max?: number | null;
      image_url?: string;
      badge?: string | null;
      quote_only?: boolean;
      available?: boolean;
    };
  };
};
