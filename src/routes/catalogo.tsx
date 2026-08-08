import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { Heart, Search } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useShop } from "@/context/ShopContext";
import { categories, products, type CategoryId } from "@/data/catalog";
import { cn } from "@/lib/utils";

type CatalogSearch = {
  categoria?: CategoryId | undefined;
  q?: string | undefined;
  favoritos?: boolean | undefined;
};

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>): CatalogSearch => ({
    categoria: (categories.find((c) => c.id === search["categoria"])?.id ?? undefined) as
      | CategoryId
      | undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    favoritos: search["favoritos"] === true || search["favoritos"] === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Catálogo de flores y plantas · Pétalos Floristas" },
      {
        name: "description",
        content:
          "Ramos de temporada, plantas, cestas, orquídeas, rosas eternas y complementos con precios actualizados y entrega propia.",
      },
      { property: "og:title", content: "Catálogo · Pétalos Floristas" },
      {
        property: "og:description",
        content: "Ramos, plantas, cestas, rosas eternas y complementos de regalo en Alcalá de Henares.",
      },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const { categoria, q, favoritos } = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogo" });
  const { favorites } = useShop();

  const filtered = useMemo(() => {
    const query = (q ?? "").trim().toLowerCase();
    return products.filter((p) => {
      if (categoria && p.category !== categoria) return false;
      if (favoritos && !favorites.includes(p.id)) return false;
      if (query && !`${p.name} ${p.description}`.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [categoria, q, favoritos, favorites]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <header>
        <p className="text-xs tracking-[0.35em] text-primary uppercase">Catálogo</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Flores, plantas y detalles</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Todos los precios incluyen IVA. Las horquillas de precio corresponden al tamaño del
          arreglo: estándar, especial o premium.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <FilterChip active={!categoria && !favoritos} onClick={() => navigate({ search: {} })}>
          Todo
        </FilterChip>
        {categories.map((cat) => (
          <FilterChip
            key={cat.id}
            active={categoria === cat.id}
            onClick={() => navigate({ search: (prev: CatalogSearch) => ({ ...prev, categoria: cat.id }) })}
          >
            {cat.label}
          </FilterChip>
        ))}
        <FilterChip
          active={favoritos === true}
          onClick={() =>
            navigate({ search: (prev: CatalogSearch) => ({ ...prev, favoritos: favoritos ? undefined : true }) })
          }
        >
          <Heart className={cn("size-3.5", favoritos && "fill-current")} /> Favoritos (
          {favorites.length})
        </FilterChip>

        <div className="relative ml-auto w-full sm:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q ?? ""}
            onChange={(e) =>
              navigate({ search: (prev: CatalogSearch) => ({ ...prev, q: e.target.value || undefined }) })
            }
            placeholder="Buscar en el catálogo"
            aria-label="Buscar en el catálogo"
            className="pl-9"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-lg border border-dashed border-border py-16 text-center">
          <p className="font-display text-2xl">Sin resultados</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Prueba con otra búsqueda o escríbenos y lo preparamos a medida.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contacto">Contactar</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
