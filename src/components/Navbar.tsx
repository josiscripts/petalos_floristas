import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useMemo, useState } from "react";

import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useShop } from "@/context/ShopContext";
import { company } from "@/data/company";
import { priceRangeLabel, products } from "@/data/catalog";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/rosas-eternas", label: "Rosas Eternas" },
  { to: "/envios", label: "Envíos y Cobertura" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const { count, favorites, setCartOpen } = useShop();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <div className="flex min-w-0 items-center gap-4">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-script text-2xl font-normal">{company.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-border/60 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="min-w-0 leading-none">
            <span className="block truncate font-script text-2xl text-foreground sm:text-3xl">
              {company.name}
            </span>
            <span className="mt-1 block text-[0.65rem] tracking-[0.35em] text-muted-foreground uppercase">
              {company.tagline}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <nav className="mr-2 hidden items-center gap-1 lg:flex">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Buscar"
            onClick={() => setSearchOpen((v) => !v)}
          >
            {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
          </Button>

          <Button variant="ghost" size="icon" asChild aria-label="Favoritos">
            <Link to="/catalogo" search={{ favoritos: true }} className="relative">
              <Heart className="size-5" />
              {favorites.length > 0 && <CounterBadge value={favorites.length} />}
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Carrito de compra"
            className="relative"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {count > 0 && <CounterBadge value={count} />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-300",
          searchOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar ramos, plantas, rosas eternas…"
            aria-label="Buscar productos"
          />
          {results.length > 0 && (
            <ul className="mt-3 divide-y divide-border/70 rounded-lg border border-border/70 bg-card">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/catalogo"
                    search={{ q: p.name }}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors hover:bg-accent"
                  >
                    <span className="min-w-0 truncate">{p.name}</span>
                    <span className="shrink-0 text-muted-foreground">{priceRangeLabel(p)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {query.trim().length >= 2 && results.length === 0 && (
            <p className="mt-3 text-sm text-muted-foreground">
              No encontramos ese producto. Llámanos al {company.phone} y lo preparamos a medida.
            </p>
          )}
        </div>
      </div>

      <CartDrawer />
    </header>
  );
}

function CounterBadge({ value }: { value: number }) {
  return (
    <span className="absolute -top-0.5 -right-0.5 grid size-4.5 min-w-4.5 place-items-center rounded-full bg-primary px-1 text-[0.625rem] font-semibold text-primary-foreground">
      {value}
    </span>
  );
}
