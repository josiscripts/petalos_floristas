import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company } from "@/data/company";
import bodasImage from "@/assets/bodas.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto, bodas y eventos · Pétalos Floristas" },
      {
        name: "description",
        content:
          "Floristería en Calle Navarro y Ledesma 15, Alcalá de Henares. Teléfono 91 882 68 37 y formulario para ramos de novia, bodas y eventos.",
      },
      { property: "og:title", content: "Contacto · Pétalos Floristas" },
      {
        property: "og:description",
        content: "Escríbenos para tu ramo de novia, decoración de bodas y eventos en Alcalá de Henares.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [tipo, setTipo] = useState("Ramo de novia");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <header className="max-w-2xl">
        <p className="text-xs tracking-[0.35em] text-primary uppercase">Contacto</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Hablemos de tus flores</h1>
        <p className="mt-3 text-muted-foreground">
          Ven a la tienda, llámanos o cuéntanos tu proyecto de boda o evento con este formulario.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Tienda y taller</p>
                <p className="text-muted-foreground">{company.address}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Teléfono</p>
                <a href={`tel:${company.phoneLink}`} className="text-muted-foreground hover:text-primary">
                  {company.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="break-all text-muted-foreground hover:text-primary"
                >
                  {company.email}
                </a>
              </div>
            </li>
          </ul>

          <img
            src={bodasImage}
            alt="Ramo de novia en el taller de la floristería"
            loading="lazy"
            width={1280}
            height={960}
            className="mt-8 w-full rounded-lg object-cover shadow-soft"
          />
          <p className="mt-4 text-xs text-muted-foreground">
            Titular: {company.owner} · {company.web}
          </p>
        </div>

        <form
          className="rounded-lg border border-border/70 bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            toast.success("Solicitud enviada", {
              description: `Te contestamos con el presupuesto de tu ${tipo.toLowerCase()} lo antes posible.`,
            });
            form.reset();
          }}
        >
          <h2 className="font-display text-2xl">Bodas, eventos y encargos a medida</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cuéntanos la fecha y el estilo que tienes en mente y preparamos una propuesta.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="nombre">Nombre y apellidos</Label>
              <Input id="nombre" name="nombre" required autoComplete="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" name="telefono" type="tel" required autoComplete="tel" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tipo">Tipo de encargo</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger id="tipo">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ramo de novia">Ramo de novia</SelectItem>
                  <SelectItem value="Decoración de boda">Decoración de boda</SelectItem>
                  <SelectItem value="Evento o empresa">Evento o empresa</SelectItem>
                  <SelectItem value="Composición personalizada">
                    Composición personalizada
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fecha">Fecha del evento</Label>
              <Input id="fecha" name="fecha" type="date" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="mensaje">Cuéntanos tu idea</Label>
              <Textarea id="mensaje" name="mensaje" rows={5} required />
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            Enviar solicitud
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Al enviar el formulario aceptas que usemos tus datos únicamente para responder a tu
            solicitud.
          </p>
        </form>
      </div>
    </div>
  );
}
