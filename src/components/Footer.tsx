import { Link } from "@tanstack/react-router";
import { CreditCard, Landmark, Mail, MapPin, Phone, ShieldCheck, Wallet } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { company, legalNotices } from "@/data/company";

export function Footer() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = legalNotices.find((n) => n.id === openId) ?? null;

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-script text-3xl">{company.name}</p>
          <p className="mt-1 text-[0.65rem] tracking-[0.35em] text-ink-muted uppercase">
            {company.tagline}
          </p>
          <p className="mt-5 text-sm text-ink-muted">
            Floristería familiar en Alcalá de Henares con tres generaciones dedicadas al arte floral.
          </p>
          <p className="mt-4 text-xs text-ink-muted">Titular: {company.owner}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink-foreground uppercase">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`tel:${company.phoneLink}`} className="hover:text-ink-foreground">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-ink-foreground">
                {company.email}
              </a>
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{company.web}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink-foreground uppercase">
            Tienda
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <Link to="/catalogo" className="hover:text-ink-foreground">
                Catálogo completo
              </Link>
            </li>
            <li>
              <Link to="/rosas-eternas" className="hover:text-ink-foreground">
                Rosas eternas
              </Link>
            </li>
            <li>
              <Link to="/envios" className="hover:text-ink-foreground">
                Envíos y cobertura
              </Link>
            </li>
            <li>
              <Link to="/sobre-nosotros" className="hover:text-ink-foreground">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-ink-foreground">
                Bodas y eventos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-ink-foreground uppercase">
            Pago seguro
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex items-center gap-2">
              <CreditCard className="size-4 shrink-0 text-primary" />
              Visa y Mastercard · pasarela SSL
            </li>
            <li className="flex items-center gap-2">
              <Wallet className="size-4 shrink-0 text-primary" />
              PayPal
            </li>
            <li className="flex items-center gap-2">
              <Landmark className="size-4 shrink-0 text-primary" />
              Transferencia o ingreso bancario
            </li>
          </ul>
          <p className="mt-4 text-xs text-ink-muted">Impuestos (IVA) incluidos en los precios.</p>

          <div className="mt-6 flex flex-col items-start gap-2">
            {legalNotices.map((notice) => (
              <button
                key={notice.id}
                type="button"
                onClick={() => setOpenId(notice.id)}
                className="text-left text-xs text-ink-muted underline-offset-4 hover:text-ink-foreground hover:underline"
              >
                {notice.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-ink-muted sm:px-6">
          © {new Date().getFullYear()} {company.legalName} · {company.owner}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setOpenId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{active?.title}</DialogTitle>
            <DialogDescription className="pt-2 text-left text-sm leading-relaxed">
              {active?.body}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
