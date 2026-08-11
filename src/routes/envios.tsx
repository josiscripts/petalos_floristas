import { createFileRoute } from "@tanstack/react-router";
import { Clock, CreditCard, Truck } from "lucide-react";

import { CoverageSearch } from "@/components/CoverageSearch";
import { company } from "@/data/company";

export const Route = createFileRoute("/envios")({
  head: () => ({
    meta: [
      { title: "Envíos y cobertura · Pétalos Floristas Alcalá de Henares" },
      {
        name: "description",
        content:
          "Reparto propio en Alcalá de Henares, Madrid y Guadalajara: consulta las más de 50 poblaciones con servicio de entrega.",
      },
      { property: "og:title", content: "Envíos y cobertura · Pétalos Floristas" },
      {
        property: "og:description",
        content: "Busca tu población y comprueba si llegamos con nuestro reparto propio de flores.",
      },
    ],
  }),
  component: EnviosPage,
});

function EnviosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-primary uppercase">Envíos</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Dónde entregamos</h1>
        <p className="mt-3 text-muted-foreground">
          Repartimos con vehículo propio para que la flor llegue en perfecto estado. Consulta tu
          población en el buscador; si no aparece, llámanos al {company.phone} y estudiamos la
          entrega.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Truck,
            title: "Reparto propio",
            text: "Sin mensajería externa en la zona de cobertura: la flor viaja en nuestras manos.",
          },
          {
            icon: Clock,
            title: "Mismo día",
            text: "Pedidos confirmados por la mañana con entrega en el día según disponibilidad.",
          },
          {
            icon: CreditCard,
            title: "Pago seguro",
            text: "Tarjeta con pasarela SSL, PayPal o transferencia. IVA incluido.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-lg border border-border/70 bg-card p-6">
            <item.icon className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-xl">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-display text-3xl">Poblaciones con servicio de entrega</h2>
        <div className="mt-6">
          <CoverageSearch />
        </div>
      </section>
    </div>
  );
}
