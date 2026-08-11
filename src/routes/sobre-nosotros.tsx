import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import aboutImage from "@/assets/sobre-nosotros.jpg";
import bodasImage from "@/assets/bodas.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros · Tres generaciones de arte floral" },
      {
        name: "description",
        content:
          "La historia de Floristería Pétalos Alcalá: un negocio familiar con tres generaciones dedicadas al arte floral en Alcalá de Henares.",
      },
      { property: "og:title", content: "Sobre nosotros · Pétalos Floristas" },
      {
        property: "og:description",
        content: "Negocio familiar en Alcalá de Henares con tres generaciones de experiencia floral.",
      },
    ],
  }),
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.35em] text-primary uppercase">Sobre nosotros</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">
              Tres generaciones
              <span className="mt-2 block font-script text-primary">cuidando flores</span>
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Pétalos Floristas nació como un pequeño negocio familiar en Alcalá de Henares y hoy
                sigue en manos de la familia: tres generaciones que se han pasado el oficio de padres
                a hijos, con la misma forma de entender la flor.
              </p>
              <p>
                En el taller de la calle Navarro y Ledesma se monta cada ramo a mano. Elegimos flor
                fresca cada mañana, trabajamos con proveedores de confianza y aconsejamos sin prisa,
                porque detrás de cada pedido hay una celebración, una disculpa o una despedida.
              </p>
              <p>
                Rocío atiende personalmente la tienda y acompaña a quien no sabe qué elegir. Ese trato
                es lo que nuestros clientes destacan en sus {company.reviews} reseñas.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/catalogo">Ver catálogo</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contacto">Visítanos</Link>
              </Button>
            </div>
          </div>
          <img
            src={aboutImage}
            alt="Interior de la floristería con estanterías y cubos de flor fresca"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <blockquote className="font-display text-2xl leading-snug italic sm:text-4xl">
            «Con libertad, libros, flores y la luna, ¿quién no puede ser feliz?»
          </blockquote>
          <p className="mt-6 font-script text-2xl text-primary">Oscar Wilde</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={bodasImage}
            alt="Floristera montando un ramo de novia en el taller"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-lg object-cover shadow-soft"
          />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Bodas y eventos</h2>
            <p className="mt-4 text-muted-foreground">
              Diseñamos ramos de novia, prendidos, decoración de iglesia y ambientación de espacios.
              Trabajamos con cita previa para estudiar el estilo, la paleta y el presupuesto con
              tiempo.
            </p>
            <Button asChild className="mt-6">
              <Link to="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
