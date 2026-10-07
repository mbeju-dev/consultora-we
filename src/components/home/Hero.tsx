import Link from "next/link";
import { SITE } from "@/lib/site";
import { IconArrow, IconBuilding, IconCheck, IconUpload, IconUser } from "../icons";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div aria-hidden="true" className="dots hero-dots" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow in">Consultora de RR. HH. · {SITE.ciudad}</span>
          <h1 className="in d1 hero-title">
            Conectamos <span style={{ color: "var(--blue)" }}>talento</span> con <span style={{ color: "var(--green-ink)" }}>oportunidades.</span>
          </h1>
          <p className="in d2 hero-lead">
            En {SITE.nombre} ayudamos a las empresas a encontrar el talento que necesitan y acompañamos a las personas en el desarrollo de su carrera profesional.
          </p>
          <div className="in d3 btn-row">
            <Link className="btn btn-blue" href="/#busquedas">Ver búsquedas laborales <IconArrow /></Link>
            <Link className="btn btn-line" href="/#cargar-cv"><IconUpload />Cargá tu CV</Link>
          </div>
          <div className="in d4 hero-checks">
            <span><IconCheck style={{ color: "var(--green-ink)" }} />Atención personalizada</span>
            <span><IconCheck style={{ color: "var(--green-ink)" }} />Conocimiento del mercado local</span>
          </div>
        </div>

        {/* Visual: empresa ↔ talento */}
        <div className="in d3 hero-visual" aria-hidden="true">
          <div className="hero-visual-bg" />
          <svg viewBox="0 0 520 470" preserveAspectRatio="none" className="hv-side hero-flow">
            <path className="flow" d="M120 120 C 220 120, 200 240, 270 240 S 330 360, 420 370" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="float hv-side node node-empresa">
            <span className="node-icon"><IconBuilding /></span>
            <span className="node-text"><strong>Empresas</strong><span>Necesitan talento</span></span>
          </div>
          <div className="flyer-pos">
            <div className="flyer">
              <div className="flyer-head">
                <span className="badge badge-green">¡BUSCAMOS!</span>
                <strong className="flyer-title">Auxiliar Administrativa/o Junior</strong>
                <span className="flyer-sub">{SITE.ciudad} · Presencial</span>
              </div>
              <div className="flyer-body">
                {["Bachiller concluido", "Manejo de Excel", "Buena predisposición"].map((t) => (
                  <span key={t} className="flyer-item"><IconCheck strokeWidth={2.4} style={{ color: "var(--green-ink)" }} />{t}</span>
                ))}
                <span className="flyer-cta">Postularme</span>
              </div>
            </div>
          </div>
          <div className="float2 hv-side node node-talento">
            <span className="avatars">
              <span className="avatar avatar-green"><IconUser /></span>
              <span className="avatar avatar-blue"><IconUser /></span>
            </span>
            <span className="node-text"><strong>Talento</strong><span>Busca crecer</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
