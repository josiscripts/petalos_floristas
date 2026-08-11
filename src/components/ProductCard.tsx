import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useShop } from "@/context/ShopContext";
import { formatPrice, priceRangeLabel, priceTiers, type Product } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addLine, toggleFavorite, isFavorite } = useShop();
  const tiers = priceTiers(product);
  const [tierIndex, setTierIndex] = useState(0);
  const favorite = isFavorite(product.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-petal">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-primary-foreground">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:text-primary"
        >
          <Heart className={cn("size-4", favorite && "fill-primary text-primary")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-xl leading-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
        </div>

        <p className="text-sm font-semibold text-primary">{priceRangeLabel(product)}</p>

        {tiers.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {tiers.map((tier, i) => (
              <button
                key={tier.label}
                type="button"
                onClick={() => setTierIndex(i)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  i === tierIndex
                    ? "border-primary bg-primary-soft text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-primary",
                )}
              >
                {tier.label} · {formatPrice(tier.price)}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto pt-1">
          {product.quoteOnly ? (
            <Button asChild variant="outline" className="w-full">
              <Link to="/contacto">Pedir presupuesto</Link>
            </Button>
          ) : (
            <Button
              className="w-full"
              onClick={() => {
                const tier = tiers[tierIndex] ?? tiers[0];
                if (!tier) return;
                addLine({
                  productId: product.id,
                  name: product.name,
                  size: tier.label,
                  price: tier.price,
                  image: product.image,
                });
                toast.success(`${product.name} añadido al carrito`);
              }}
            >
              Añadir al carrito
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
