import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Gift, Sparkles, Sun } from "lucide-react";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocalProducts } from "@/data/catalog";
import { useProducts } from "@/hooks/useProducts";
import rosasImage from "@/assets/cat-rosas-eternas.jpg";

export const Route = createFileRoute("/rosas-eternas")({
  head: () => ({
    meta: [
      { title: "Rosas Eternas · Flor preservada que dura 7-10 años" },
      {
        name: "description",
        content:
          "Rosas naturales preservadas que duran entre 7 y 10 años sin agua ni luz. Cajas de rosas, Caja Romántica, Cupido y Pecera Rosa Eterna.",
      },
      { property: "og:title", content: "Rosas Eternas · Pétalos Floristas" },
      {
        property: "og:description",
        content: "Flor natural preservada, sin agua ni luz, con una duración de 7 a 10 años.",
      },
    ],
  }),
  component: RosasEternasPage,
});

const steps = [
  {
    icon: Sparkles,
    title: "Rosa natural seleccionada",
    text: "Partimos de rosa fresca de corte premium, elegida en su punto óptimo de apertura.",
  },
  {
    icon: Droplets,
    title: "Sustitución de la savia",
    text: "La savia se reemplaza por una solución vegetal que mantiene la textura y flexibilidad del pétalo.",
  },
  {
    icon: Sun,
    title: "Sin agua ni luz directa",
    text: "No necesita riego ni sol. Basta mantenerla en interior, alejada de la humedad.",
  },
  {
    icon: Gift,
    title: "Entre 7 y 10 años de vida",
    text: "Conserva su aspecto natural durante años, por eso es el regalo más duradero de la tienda.",
  },
];

function RosasEternasPage() {
  const { data: productsFromSupabase, isLoading } = useProducts();
  const allProducts = productsFromSupabase || getLocalProducts();
  const eternas = allProducts.filter((p: any) => p.category === "rosas-eternas");

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs tracking-[0.35em] text-primary uppercase">Flor preservada</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">
              Rosas Eternas
              <span className="mt-2 block font-script text-primary">que duran años</span>
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Son rosas naturales, no artificiales. Un proceso de preservación sustituye su savia por
              una solución vegetal que mantiene el tacto y el color del pétalo entre 7 y 10 años, sin
              agua y sin necesidad de luz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/catalogo" search={{ categoria: "rosas-eternas" }}>
                  Ver colección
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contacto">Personalizar una caja</Link>
              </Button>
            </div>
          </div>
          <img
            src={rosasImage}
            alt="Caja negra con rosas eternas preservadas en tono fucsia"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-lg object-cover shadow-petal"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">Cómo se preserva una rosa</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-lg border border-border/70 bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary-soft text-accent-foreground">
                  <step.icon className="size-4" />
                </span>
                <span className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  Paso {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>

        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
          <AccordionItem value="cuidados">
            <AccordionTrigger>¿Qué cuidados necesita?</AccordionTrigger>
            <AccordionContent>
              Ninguno especial: no se riega ni se pulveriza. Manténla en interior, evita la humedad
              alta y la luz solar directa, y quita el polvo con un pincel suave o aire frío.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="colores">
            <AccordionTrigger>¿Puedo elegir el color y la dedicatoria?</AccordionTrigger>
            <AccordionContent>
              Sí. Trabajamos rojo, rosa, blanco, nude y tonos especiales, y podemos grabar o rotular
              iniciales y dedicatorias en la caja. Llámanos al 91 882 68 37 para verlo contigo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="duracion">
            <AccordionTrigger>¿Realmente duran de 7 a 10 años?</AccordionTrigger>
            <AccordionContent>
              Sí, siempre que se respeten las condiciones de conservación. Con el paso del tiempo el
              tono puede matizarse ligeramente, algo natural en la flor preservada.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Colección de rosas eternas</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eternas.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
