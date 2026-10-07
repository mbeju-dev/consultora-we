import Link from "next/link";
import { emailLabel, mailto, NAV, SITE, WA, waLabel } from "@/lib/site";
import { IconWhatsApp } from "../icons";
import { Logo } from "./Logo";
import { Year } from "./Year";

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <Logo variant="footer" />
              <p>Consultora de Recursos Humanos y Talento en {SITE.ciudad}, Paraguay.</p>
            </div>
            <nav aria-label="Navegación del pie" className="footer-col">
              <strong>Navegación</strong>
              {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            </nav>
            <div className="footer-col">
              <strong>Candidatos</strong>
              <Link href="/#busquedas">Ver búsquedas laborales</Link>
              <Link href="/#cargar-cv">Cargá tu CV</Link>
              <strong style={{ marginTop: 12 }}>Empresas</strong>
              <Link href="/#solicitar">Solicitar una búsqueda</Link>
            </div>
            <div className="footer-col">
              <strong>Contacto</strong>
              <a href={WA.general} target="_blank" rel="noopener">WhatsApp: {waLabel}</a>
              <a href={mailto} style={{ overflowWrap: "anywhere" }}>{emailLabel}</a>
              <span>{SITE.ciudad}, {SITE.region}</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© <Year /> {SITE.nombre}. Todos los derechos reservados.</span>
            <a id="privacidad" href="#privacidad">Política de privacidad</a>
          </div>
        </div>
      </footer>

      <a className="wa-fab" href={WA.general} target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
        <IconWhatsApp />
        WhatsApp
      </a>
    </>
  );
}

export function MobileBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="mbar">
      {children}
      <a className="btn btn-green mbar-wa" href={WA.general} target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
        <IconWhatsApp />
      </a>
    </div>
  );
}
