import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flower2, Star, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { campaigns, categories, products } from "@/data/catalog";
import { company } from "@/data/company";
import heroImage from "@/assets/hero-bouquet.jpg";
import aboutImage from "@/assets/sobre-nosotros.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pétalos Floristas · Floristería en Alcalá de Henares" },
      {
        name: "description",
        content:
          "Tres generaciones de arte floral en Alcalá de Henares. Ramos, plantas, rosas eternas y entrega propia en más de 50 poblaciones.",
      },
      { property: "og:title", content: "Pétalos Floristas · Arte Floral" },
      {
        property: "og:description",
        content:
          "Ramos de temporada, composiciones, rosas eternas y bodas. Floristería familiar en Alcalá de Henares.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const destacados = products.filter((p) =>
    ["ramo-felicidad", "ramo-girasoles", "caja-rosas-eternas", "centro-orquideas-variadas"].includes(
      p.id,
    ),
  );

  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="text-xs tracking-[0.35em] text-primary uppercase">
              Alcalá de Henares · desde tres generaciones
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-balance-tight sm:text-6xl">
              El arte floral que hereda
              <span className="mt-2 block font-script text-primary">manos de familia</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cada ramo se monta a mano en nuestro taller de la calle Navarro y Ledesma, con flor
              fresca elegida en la lonja esa misma mañana y el mimo de una floristería que lleva
              décadas acompañando bodas, aniversarios y despedidas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/catalogo">
                  Ver Catálogo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/rosas-eternas">Rosas Eternas</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Ramo de rosas y ranúnculos rosados envuelto en papel kraft"
              width={1600}
              height={1200}
              className="w-full rounded-lg object-cover shadow-petal"
            />
            <div className="mt-4 rounded-lg border border-border/70 bg-card p-4 shadow-soft sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs">
              <div className="flex items-center gap-2">
                <div className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">{company.rating}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {company.reviews} reseñas · Powered by Google
              </p>
              <p className="mt-2 text-sm leading-snug">
                «El trato de Rocío es exquisito, te asesora y acierta siempre.»
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Nuestras colecciones</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Flor fresca, plantas y flor preservada. Elige por categoría y lo preparamos para hoy.
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/catalogo">
              Todo el catálogo <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/catalogo"
              search={{ categoria: cat.id }}
              className="group overflow-hidden rounded-lg border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-petal"
            >
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-display text-xl">{cat.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Fechas especiales</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {campaigns.map((c) => (
              <article
                key={c.id}
                className="rounded-lg border border-primary/25 bg-primary-soft p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs tracking-[0.25em] text-accent-foreground uppercase">
                  {c.dates}
                </p>
                <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <h2 className="font-display text-3xl sm:text-4xl">Los más regalados</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destacados.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <img
            src={aboutImage}
            alt="Interior de la floristería con cubos de flor fresca"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-lg object-cover shadow-soft"
          />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Tres generaciones de flores</h2>
            <p className="mt-4 text-muted-foreground">
              Lo que empezó como un puesto de flores en Alcalá de Henares es hoy una floristería
              familiar donde la tercera generación sigue trabajando con las mismas manos y el mismo
              criterio: flor de calidad, composiciones honestas y consejo sincero.
            </p>
            <blockquote className="mt-6 border-l-2 border-primary pl-5 font-display text-xl italic">
              «Con libertad, libros, flores y la luna, ¿quién no puede ser feliz?»
              <footer className="mt-2 text-sm font-sans text-muted-foreground not-italic">
                Oscar Wilde
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/sobre-nosotros">
                  <Flower2 className="size-4" /> Nuestra historia
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/envios">
                  <Truck className="size-4" /> Zonas de entrega
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
