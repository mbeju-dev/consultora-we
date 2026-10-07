import { emailLabel, mailto, SITE, WA, waLabel } from "@/lib/site";
import { ContactoForm } from "../forms/ContactoForm";
import { IconChat, IconFacebook, IconInstagram, IconLinkedin, IconMail, IconPin, IconWhatsApp } from "../icons";

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-t" className="section">
      <div className="wrap stack-40">
        <div className="reveal contact-banner">
          <div aria-hidden="true" className="ring ring-tl" />
          <div className="contact-banner-copy">
            <span className="camino-kicker" style={{ color: "#D8F2E0" }}>Contacto</span>
            <h2 id="contacto-t" className="contact-banner-title">¿Tenés alguna consulta? Escribinos por WhatsApp.</h2>
            <p style={{ color: "#E2F4E7", fontSize: 17 }}>Respondemos consultas de empresas y candidatos.</p>
          </div>
          <a className="btn btn-white btn-xl" href={WA.general} target="_blank" rel="noopener">
            <IconWhatsApp size={22} style={{ color: "var(--green-ink)" }} />
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="split split-360" style={{ gap: 40 }}>
          <div className="reveal stack-14">
            <a href={WA.general} target="_blank" rel="noopener" className="contact-item">
              <span className="contact-icon contact-icon-green"><IconChat /></span>
              <span className="contact-text"><span>WhatsApp</span><strong>{waLabel}</strong></span>
            </a>
            <a href={mailto} className="contact-item">
              <span className="contact-icon"><IconMail /></span>
              <span className="contact-text" style={{ minWidth: 0 }}><span>Correo electrónico</span><strong style={{ overflowWrap: "anywhere" }}>{emailLabel}</strong></span>
            </a>
            <div className="contact-item">
              <span className="contact-icon"><IconPin size={22} /></span>
              <span className="contact-text">
                <span>Ubicación</span>
                <strong>{SITE.ciudad}, {SITE.region}</strong>
                <span>[Dirección de la oficina]</span>
              </span>
            </div>
            <div className="social">
              <span className="social-label">Seguinos</span>
              <a className="iconbtn" href={SITE.redes.instagram} aria-label={`Instagram de ${SITE.nombre}`}><IconInstagram /></a>
              <a className="iconbtn" href={SITE.redes.facebook} aria-label={`Facebook de ${SITE.nombre}`}><IconFacebook /></a>
              <a className="iconbtn" href={SITE.redes.linkedin} aria-label={`LinkedIn de ${SITE.nombre}`}><IconLinkedin /></a>
            </div>
          </div>
          <div className="reveal card card-border card-36">
            <ContactoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
