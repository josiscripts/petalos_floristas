import { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { coverage } from "@/data/coverage";

export function CoverageSearch() {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = coverage.filter((t) => t.name.toLowerCase().includes(q));
    return {
      Madrid: filtered.filter((t) => t.province === "Madrid"),
      Guadalajara: filtered.filter((t) => t.province === "Guadalajara"),
      count: filtered.length,
    };
  }, [query]);

  return (
    <div>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe tu población: Meco, Coslada, Pioz…"
          aria-label="Buscar población con servicio de entrega"
          className="pl-9"
        />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        {groups.count === 0
          ? "No entregamos con reparto propio en esa población. Llámanos y buscamos una solución."
          : `${groups.count} poblaciones con servicio de entrega propio.`}
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {(["Madrid", "Guadalajara"] as const).map((province) => (
          <div key={province}>
            <h3 className="flex items-center gap-2 font-display text-2xl">
              <MapPin className="size-4 text-primary" />
              {province}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {groups[province].map((town) => (
                <li
                  key={town.name}
                  className="rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {town.name}
                </li>
              ))}
              {groups[province].length === 0 && (
                <li className="text-sm text-muted-foreground">Sin coincidencias.</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
